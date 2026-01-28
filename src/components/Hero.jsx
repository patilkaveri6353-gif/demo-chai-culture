import React from 'react'
import logo from '../assets/logo.png'
import chai from '../assets/chai.png'

const Hero = () => {
  return (
 <main className="flex-1 flex flex-col items-center justify-center px-6 text-center gap-8">
      <img
        src={logo}
        alt="Chai Culture Logo"
        className="w-42 h-30 "
      />
      <p className=" text-[#795d4e]  italic text-5xl md:text-5xl animate-pulse">
        Brew the Royal Tradition
      </p>

      <p className="max-w-xl text-[#95765a] ">
        A premium chai experience inspired by India’s timeless tea heritage.
        Crafted for moments of warmth and connection.
      </p>

      <span className="h-12 w-65 bg-[#e9a701] font-serif text-[#62462c] text-lg flex items-center justify-center rounded-sm ">
        Launching Soon
      </span>

      <div className="w-67 h-13 flex justify-center items-center shadow-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="pl-3 rounded-sm focus:outline-none"
        />
        <button className="bg-[#e9a701] text-white h-8 w-25 rounded-sm hover:opacity-90 cursor-pointer">
          Notify Me
        </button>
      </div>

      <img
        src={chai}
        alt="Chai setup"
        className="w-full max-w-xl rounded-xl shadow-md"
      />

    </main>
  )
}

export default Hero
