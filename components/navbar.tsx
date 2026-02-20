"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto flex justify-between p-4 text-white">
        <div className="font-bold">Bisesh</div>
        <div className="space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}