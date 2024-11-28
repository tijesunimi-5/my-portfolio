'use client'
import React from 'react'

const Button = ({children, styles}) => {
  return (
    <button
      className={`btn m-auto w-auto h-auto font-bold py-4 px-5 bg-bg6i rounded-lg border-2 text-white tracking-wide border-[#F2EAC9] ${styles}`}
    >
      {children}
    </button>
  );
}

export default Button
