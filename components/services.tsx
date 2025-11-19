"use client"

import { Code, Video, ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      // Cards animation
      const cards = gsap.utils.toArray('.service-card')
      gsap.from(cards, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Hover animation function
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const arrow = e.currentTarget.querySelector('.arrow-icon')
    const icon = e.currentTarget.querySelector('.service-icon')
    
    gsap.to(arrow, {
      x: 5,
      y: -5,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out"
    })
    
    gsap.to(icon, {
      scale: 1.1,
      duration: 0.3,
      ease: "back.out(1.7)"
    })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const arrow = e.currentTarget.querySelector('.arrow-icon')
    const icon = e.currentTarget.querySelector('.service-icon')
    
    gsap.to(arrow, {
      x: 0,
      y: 0,
      rotation: -45,
      duration: 0.3,
      ease: "power2.out"
    })
    
    gsap.to(icon, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  return (
    <section id="services" ref={containerRef} className="bg-black text-white py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/20 pb-8">
          <h2 className="text-6xl md:text-8xl font-black uppercase font-syne">Services</h2>
          <p className="text-right font-mono text-sm uppercase tracking-widest mt-4 md:mt-0">
            What I can do for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/20 border border-white/20">
          {/* Web Dev */}
          <div 
            className="service-card bg-black p-12 group hover:bg-neutral-900 transition-colors relative overflow-hidden cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="arrow-icon w-12 h-12 -rotate-45" />
            </div>
            <Code className="service-icon w-12 h-12 mb-8 text-neutral-400" />
            <h3 className="text-3xl font-bold mb-4">Web Development</h3>
            <ul className="space-y-2 text-neutral-400 mb-8 font-mono text-sm">
              <li>/ Landing Pages</li>
              <li>/ UI/UX Design</li>
              <li>/ Responsive Layouts</li>
              <li>/ Web Animations</li>
            </ul>
            <p className="text-lg leading-relaxed text-neutral-300">
              Building fast, accessible, and visually striking websites that leave a lasting impression.
            </p>
          </div>

          {/* Video Editing */}
          <div 
            className="service-card bg-black p-12 group hover:bg-neutral-900 transition-colors relative overflow-hidden cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight className="arrow-icon w-12 h-12 -rotate-45" />
            </div>
            <Video className="service-icon w-12 h-12 mb-8 text-neutral-400" />
            <h3 className="text-3xl font-bold mb-4">Video Editing</h3>
            <ul className="space-y-2 text-neutral-400 mb-8 font-mono text-sm">
              <li>/ AMVs & Edits</li>
              <li>/ Short-form Content</li>
              <li>/ Smooth Transitions</li>
              <li>/ Twixtor & VFX</li>
            </ul>
            <p className="text-lg leading-relaxed text-neutral-300">
              Crafting dynamic visual stories with precise timing, flow, and impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
