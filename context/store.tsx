"use client";
import React, { createContext, useState } from "react";
import Messages from "@/data/Messages";

interface GlobalContextData {
  notificationCount: number;
  messages: string[];
  updateNotificationCount: () => void;
}

export const GlobalContext = createContext<GlobalContextData>({
  notificationCount: 0,
  messages: [],
  updateNotificationCount: () => {},
});

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [notificationCount, setNotificationCount] = useState(0);
  const [messages, setMessages] = useState<string[]>(Messages);

  const updateNotificationCount = () => {
    setNotificationCount(messages.length);
  };

  return (
    <GlobalContext.Provider
      value={{ notificationCount, messages, updateNotificationCount }}
    >
      {children}
    </GlobalContext.Provider>
  );
};