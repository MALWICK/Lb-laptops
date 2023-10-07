"use client"
import React, { createContext, useState } from 'react';

interface GlobalContextProps{
  count: number;
  message: string;
  incrementCount: () => void;
  setMessage: (message: string) => void;
}

export const GlobalContext= createContext<GlobalContextProps>({
  count: 0,
  message: '',
  incrementCount: () => {},
  setMessage: () => {},
});

export const contextProvider: React.FC = ({ children }:any) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <GlobalContext.Provider value={{ count, message, incrementCount, setMessage }}>
      {children}
    </GlobalContext.Provider>
  );
};