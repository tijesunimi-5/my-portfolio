"use client";
import React from "react";

const Card = ({children, styles}) => {
  return (
    <div
      className={`${styles} card bg-bg9 overflow-hidden m-auto w-auto h-auto border-[#8C7264] border-2`}
    >
      {children}
    </div>
  );
};

export default Card;
