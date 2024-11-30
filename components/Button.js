'use client'
import React from 'react'

const Button = ({children, styles}) => {
  return (
    <button
      className={`btn m-auto w-auto h-auto font-bold py-4 px-5 bg-bg9i rounded-lg border-2 text-color3 tracking-wide border-[#8C7264] shadow-2xl ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button
