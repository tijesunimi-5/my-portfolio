'use client'
import { FaArrowUp } from 'react-icons/fa'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="flex justify-between footer w-[800px] bg-bg9 h-16 text-white lg:w-[1020px] 2xl:w-[1519px] xl:w-[1280px]">
      <h1 className="text-5xl font-bold py-2 px-5">Codelight</h1>
      <p className="text-4xl mt-4 font-semibold">Coded - 2024</p>
      <Link href={"/"}>
        <FaArrowUp className="mx-5 text-6xl bg-bg9i text-color3 py-2 px-2 scroll-smooth" />
      </Link>
    </footer>
  );
}

export default Footer
