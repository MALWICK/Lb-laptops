"use client";
import { createContext, useContext, useState, ReactNode } from 'react';
import Messages from "@/data/Messages"


interface GlobalContextData {
  notifications: number;
  messages: string[];
  updateNotifications: (notifications: number) => void;
  updateMessages: (messages: string[]) => void;
}

const GlobalContext = createContext<GlobalContextData>({
  notifications: 5,
  messages: [],
  updateNotifications: () => {},
  updateMessages: () => {},
});

export const useGlobalContext = (): GlobalContextData => useContext(GlobalContext);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState(0);
  const [messages, setMessages] = useState<string[]>([]);

  const updateNotifications = (newNotifications: number) => {
    setNotifications(newNotifications);
  };

  const updateMessages = (newMessages: string[]) => {
    setMessages(newMessages);
  };

  const contextValue: GlobalContextData = {
    notifications,
    messages,
    updateNotifications,
    updateMessages,
  };

  return (
    <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>
  );
};