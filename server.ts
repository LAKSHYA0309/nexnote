import { createServer } from "node:http";
import { Server } from "socket.io";

type UserInfo = { id: string; name: string; email: string; image: string }; 
type SocketUserInfo = { userId: string; fileId: string };

declare global {
  var usersDetails: Record<string, Map<string, UserInfo>> | undefined;
} 

declare global{
  var socketToUser: Map<string,SocketUserInfo> | undefined;
}

export const user = globalThis.usersDetails || (globalThis.usersDetails = {});
export const socketToUser = globalThis.socketToUser || (globalThis.socketToUser= new Map());

const port = 8000;

const httpserver = createServer();

const io = new Server(httpserver, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  socket.on("createRoom", ({ fileId, joinedUser }) => {
    socket.join(fileId);
    if (!user[fileId]) {
      user[fileId] = new Map();
    }
    if (joinedUser) { 
      user[fileId].set(joinedUser.id, joinedUser);
      socketToUser.set(socket.id, { userId: joinedUser.id, fileId });  
      console.log("joined after the connection .....................", joinedUser) 
      console.log("users available in the map of user with the file and details of user .......................",user[fileId]); 
      console.log("socket with user is attached ",socketToUser);
    }

    io.to(fileId).emit("user-Joined", Array.from(user[fileId].values())); //send it to every user
  });
  socket.on("send-changes", ({ delta, fileId }) => {
    console.log("CHANGE"); 
    console.log(fileId,"fileid  is here  "); 
    console.log(delta,"detla")
    socket.to(fileId).emit("receive-changes", { delta, fileId });
  });
  socket.on("cursor-move", (range, cursorid, fileid) => { 
    console.log("fired for cursor")
    socket.to(fileid).emit("receive-cursor-move", range, fileid, cursorid);
  });
  socket.on("disconnect", () => {
    const userInfo = socketToUser.get(socket.id); 
    console.log("socketid : ..................",socket.id)
    if (userInfo) { 
      const { userId, fileId } = userInfo; 
      if(user[fileId]){  

        console.log("got disconnected...................",user[fileId].get(userId));
        user[fileId].delete(userId); 
        io.to(fileId).emit("user-Joined",Array.from(user[fileId].values())); 
        console.log("user is in the file after deletion.................",user[fileId]);
      }

    }
    socketToUser.delete(socket.id); 
    console.log("current socket.............with the user   ",socketToUser)
  });
});

httpserver.listen(port, () =>
  console.log(`Socket.IO server running on ${port}`)
);

// Handle server errors
httpserver.on("error", (error) => {
  console.error("🔴 HTTP Server error:", error);
});

process.on("SIGINT", () => {
  console.log("\n🛑 Shutting down server...");
  httpserver.close(() => {
    console.log("✅ Server closed");
    process.exit(0);
  });
});
