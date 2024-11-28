"use client";
import React from "react";

const Card = ({children, styles}) => {
  return <div className={`${styles} bg-bg6 overflow-hidden m-auto w-auto h-auto`}>
    {children}
  </div>;
};

export default Card;
