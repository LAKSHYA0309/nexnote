"use client";
import React, { createContext, useContext, useState } from "react";

type SubscriptionModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const SubscriptionModalContext = createContext<SubscriptionModalContextType | undefined>(undefined);

export const SubscriptionModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <SubscriptionModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </SubscriptionModalContext.Provider>
  );
};

export const useSubscriptionModal = () => {
  const context = useContext(SubscriptionModalContext);
  if (!context) {
    throw new Error("useSubscriptionModal must be used within a SubscriptionModalProvider");
  }
  return context;
};
