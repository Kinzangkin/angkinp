"use client"


import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiArrowDownRight } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        delay: 0.2
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.5")
      .from(".hero-card", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }, "-=0.5")

      // Parallax effect for cards
      gsap.to(".hero-card", {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-4 md:px-8 pt-32 pb-12 relative overflow-hidden bg-[#0d0d0d] text-white">
      {/* Decorative Grid Points */}
      <div className="absolute top-24 left-8 flex gap-2 opacity-50">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white rotate-45" />
        ))}
      </div>
      <div className="absolute top-24 right-8 flex gap-2 opacity-50">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white rotate-45" />
        ))}
      </div>

      {/* Main Headline */}
      <div className="flex flex-col items-center justify-center text-center mt-10 md:mt-0 z-10">
        <h1 ref={titleRef} className="text-[10vw] leading-[0.8] font-black tracking-tighter uppercase font-syne text-white mix-blend-difference">
          FRONTEND
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-b from-neutral-500 to-neutral-800" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>
            & VIDEO
          </span>
        </h1>
      </div>

      {/* Subtext & CTA */}
      <div ref={subtitleRef} className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-end max-w-7xl mx-auto w-full z-10">
        <div className="md:col-span-5">
          <div className="bg-white text-black p-1 inline-block mb-4 text-xs font-mono uppercase tracking-wider">
            Based in Digital Space
          </div>
          <p className="text-xl md:text-2xl font-medium leading-tight max-w-md text-neutral-300">
            Hi, I’m Kinz. I build modern, fast, responsive websites and craft dynamic edits for creators and brands.
          </p>
        </div>
        
        <div className="md:col-span-2 flex justify-center">
           <FiArrowDownRight className="w-12 h-12 md:w-24 md:h-24 stroke-1 animate-pulse text-white/50" />
        </div>

        <div className="md:col-span-5 flex flex-col items-start md:items-end gap-4">
          <div className="flex gap-4">
            <a href="#projects" className="group relative px-8 py-4 bg-white text-black overflow-hidden rounded-none transition-all hover:bg-neutral-200">
              <span className="relative z-10 font-bold uppercase tracking-wider text-sm">View My Work</span>
            </a>
            <a href="#contact" className="group relative px-8 py-4 border border-white/30 text-white overflow-hidden rounded-none transition-all hover:bg-white hover:text-black">
              <span className="relative z-10 font-bold uppercase tracking-wider text-sm">Hire Me</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Cards Feature - Mimicking Reference */}
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-24 max-w-6xl mx-auto w-full z-10">
        {/* Card 1 */}
        <div className="hero-card bg-[#1a1a1a] p-8 min-h-[300px] flex flex-col justify-between hover:bg-[#222] transition-colors duration-300 border border-white/5">
          <div className="flex justify-between items-start">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Strategy</span>
            <FiArrowDownRight className="w-4 h-4 text-neutral-400" />
          </div>
          <div className="self-center">
            <div className="w-16 h-16 bg-white/5 grid grid-cols-2 gap-1 p-1">
               <div className="bg-white col-span-1 row-span-1"></div>
               <div className="bg-transparent col-span-1 row-span-1"></div>
               <div className="bg-transparent col-span-1 row-span-1"></div>
               <div className="bg-white col-span-1 row-span-1"></div>
            </div>
          </div>
          <div className="flex justify-between items-end border-t border-white/10 pt-4">
            <span className="font-bold text-sm">PLANNING</span>
            <span className="text-xs font-mono text-neutral-500">01</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="hero-card bg-[#1a1a1a] p-8 min-h-[300px] flex flex-col justify-between hover:bg-[#222] transition-colors duration-300 border border-white/5">
          <div className="flex justify-between items-start">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Design</span>
            <FiArrowDownRight className="w-4 h-4 text-neutral-400" />
          </div>
          <div className="self-center">
             <div className="w-16 h-16 flex items-center justify-center">
                <div className="w-8 h-8 bg-white rotate-45"></div>
             </div>
          </div>
          <div className="flex justify-between items-end border-t border-white/10 pt-4">
            <span className="font-bold text-sm">CREATION</span>
            <span className="text-xs font-mono text-neutral-500">02</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="hero-card bg-[#1a1a1a] p-8 min-h-[300px] flex flex-col justify-between hover:bg-[#222] transition-colors duration-300 border border-white/5">
          <div className="flex justify-between items-start">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Build</span>
            <FiArrowDownRight className="w-4 h-4 text-neutral-400" />
          </div>
          <div className="self-center">
             <div className="w-16 h-16 border-2 border-white flex items-center justify-center">
                <div className="w-4 h-4 bg-white"></div>
             </div>
          </div>
          <div className="flex justify-between items-end border-t border-white/10 pt-4">
            <span className="font-bold text-sm">DEVELOPMENT</span>
            <span className="text-xs font-mono text-neutral-500">03</span>
          </div>
        </div>
      </div>
    </section>
  )
}
