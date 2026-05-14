import { create } from "zustand";
import { io, Socket } from "socket.io-client";

type UserInfo = { id: string; name: string; email: string; image: string };
type SocketState = {
  socket: Socket | null;
  isConnected: boolean;
  joinedUser: UserInfo | null;
  fileId: string | null;

  // lifecycle
  connectSocket: (
    url: string,
    fileId: string,
    joinedUser: UserInfo,
    options?: any
  ) => void;
  disconnectSocket: () => void;
  // event management
  addListener: (event: string, handler: (...args: any[]) => void) => void;
  removeListener: (event: string, handler?: (...args: any[]) => void) => void;

  // emit
  sendMessage: (event: string, ...payload: any) => void;
};

const UseSocket = create<SocketState>((set, get) => ({
  socket: null,
  isConnected: false,
  joinedUser: null,
  fileId: null,

  connectSocket: (url, fileId, joinedUser, options: any) => {
    console.log("hey i am called");
    if (get().socket) {
      get().socket?.disconnect();
    }

    const newSocket = io(url, {
      transports: ["polling", "websocket"],
      ...options,
    });

    set({ socket: newSocket, isConnected: false, joinedUser, fileId });
    newSocket.on("connect", () => {
      set({ socket: newSocket, isConnected: true });
      console.log("Socket connected!");

      if (fileId && joinedUser) {
        newSocket.emit("create-room", { fileId, joinedUser });
      }
    });

    newSocket.on("disconnect", () => {
      set({ isConnected: false });
      console.log("Socket disconnected!");
    });

    newSocket.on("connect_error", (error) => {
      set({ isConnected: false });
      console.error("🔴 Socket connection error:", error);
    });

    newSocket.on("reconnect", (attemptNumber) => {
      set({ isConnected: true });
      console.log("🔄 Socket reconnected after", attemptNumber, "attempts");
      const { fileId, joinedUser } = get();
      if (fileId && joinedUser) {
        newSocket.emit("createRoom", { fileId, joinedUser });
      }
    });

    newSocket.on("reconnect_error", (error) => {
      console.error("🔴 Socket reconnection error:", error);
    });
  },
  disconnectSocket: () => {
    const socket = get().socket;
    if (socket) {
      socket.disconnect();
      set({ socket: null, isConnected: false,fileId:null,joinedUser:null });
    }
  },

  addListener: (event, handler) => {
    const socket = get().socket;
    if (socket) {
      socket.off(event, handler); // prevent duplicate listeners
      socket.on(event, handler);
    } else {
      console.warn(`Socket not connected. Cannot add listener for "${event}".`);
    }
  },

  removeListener: (event, handler) => {
    const socket = get().socket;
    if (socket) {
      if (handler) {
        socket.off(event, handler);
      } else {
        socket.off(event);
      }
    }
  },
  sendMessage: (event: string, ...payload: any) => {
    const { socket, isConnected } = get();
    if (socket && isConnected) {
      socket.emit(event, ...payload);
    } else {
      console.warn(`Socket not connected. Cannot send "${event}".`);
    }
  },
}));

export default UseSocket;
