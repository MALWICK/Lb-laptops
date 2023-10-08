"use client";
import React from "react";
import { useGlobalContext } from "@/context/store";
import { BsBell } from "react-icons/bs";

const NotificationIcon: React.FC = () => {
  const { notifications } = useGlobalContext();
  
  return (
    <div>
      <BsBell>{notifications}</BsBell>
    </div>
  );
};

export default NotificationIcon;
