"use client"

import React, { createContext, useState } from 'react';

interface NotificationContextProps {
  count: number;
  message: string;
  incrementCount: () => void;
  setMessage: (message: string) => void;
}

export const NotificationContext = createContext<NotificationContextProps>({
  count: 0,
  message: '',
  incrementCount: () => {},
  setMessage: () => {},
});

export const NotificationProvider: React.FC = ({ children }:any) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <NotificationContext.Provider value={{ count, message, incrementCount, setMessage }}>
      {children}
    </NotificationContext.Provider>
  );
};