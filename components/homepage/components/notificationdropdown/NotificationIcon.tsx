"use client";
import React, { useContext } from "react";
import { GlobalContext } from "@/context/store";

import { BsBell } from "react-icons/bs";

const NotificationIcon: React.FC = () => {
  const { notificationCount, messages, updateNotificationCount } = useContext(
    GlobalContext
  );
  const handleClick = () =>{
    console.log("Notification icon cliked");
    
  }
  
  return (
    <div onClick={handleClick}>
      <BsBell >{notificationCount}</BsBell>
    </div>
  );
};

export default NotificationIcon;
