"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IoMenuSharp } from "react-icons/io5";
import { FaMixer } from "react-icons/fa";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = ["Services", "Process", "Projects", "Pricing", "Contact"]

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-8 md:py-6 mix-blend-difference text-white pointer-events-none">
        {/* Logo Area */}
        <div className="pointer-events-auto">
          <Link href="/" className="bg-white text-black px-3 py-1 font-bold text-sm tracking-wider uppercase hover:bg-gray-200 transition-colors">
            KINZ ✦ DEV
          </Link>
        </div>

        {/* Navigation - Pill Shape */}
        <nav className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md px-2 py-1.5 rounded-full border border-white/20 pointer-events-auto">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="px-4 py-1.5 text-xs font-medium uppercase tracking-wide hover:bg-white hover:text-black rounded-full transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Status / Date */}
        <div className="hidden md:block pointer-events-auto">
          <div className="bg-white/10 backdrop-blur border border-white/10 text-white px-3 py-1 text-xs font-mono uppercase tracking-widest">
            Open for Work 2025
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden pointer-events-auto">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white hover:bg-white/20"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaMixer /> : <IoMenuSharp />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black text-white flex flex-col items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-3xl font-black uppercase tracking-tighter hover:text-neutral-400 transition-colors font-syne"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
            </nav>
            
            <div className="absolute bottom-12 text-xs font-mono text-neutral-500 uppercase tracking-widest">
              Kinz ✦ Dev © 2025
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
