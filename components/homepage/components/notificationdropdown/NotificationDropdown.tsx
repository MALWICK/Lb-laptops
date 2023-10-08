"use client";
import React from "react";
import { useGlobalContext } from "@/context/store";
import Messages from "@/data/Messages";

const MyComponent: React.FC = () => {
  const { messages } = useGlobalContext();
  
  return (
    <div>
      <h2>My Component</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
