"use client"

import Image from "next/image"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal
      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      // Text reveal
      gsap.from(textRef.current?.children || [], {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })

      // Stats reveal
      gsap.from(statsRef.current?.children || [], {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="about" className="py-24 px-4 md:px-8 bg-white border-t border-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div ref={imageRef} className="relative aspect-3/4 bg-[#F3F3EF] overflow-hidden border border-black/10 group">
          <Image 
            src="/img/11.jpg" 
            alt="Kinz Portrait" 
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur border-t border-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p className="font-mono text-xs uppercase tracking-widest text-center">Kinz — Creator</p>
          </div>
        </div>

        <div className="space-y-12">
          <div ref={textRef}>
            <h2 className="text-5xl md:text-7xl font-black uppercase font-syne mb-8 leading-[0.9] text-black">
              Digital <br/> Craftsman
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-neutral-800">
              I build modern, fast, responsive websites and craft dynamic edits for creators and brands
            </p>
          </div>

          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2 border-l-2 border-black pl-4 hover:bg-neutral-50 transition-colors duration-300 p-2">
              <h3 className="font-bold text-sm uppercase tracking-wider">Experience</h3>
              <p className="text-sm text-neutral-600">3+ Years in Dev & Editing</p>
            </div>
            <div className="space-y-2 border-l-2 border-black pl-4 hover:bg-neutral-50 transition-colors duration-300 p-2">
              <h3 className="font-bold text-sm uppercase tracking-wider">Tools</h3>
              <p className="text-sm text-neutral-600">React, Next.js, After Effects, Premiere</p>
            </div>
            <div className="space-y-2 border-l-2 border-black pl-4 hover:bg-neutral-50 transition-colors duration-300 p-2">
              <h3 className="font-bold text-sm uppercase tracking-wider">Focus</h3>
              <p className="text-sm text-neutral-600">Performance & Visual Impact</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
