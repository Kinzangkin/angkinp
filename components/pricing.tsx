"use client"

import { FaCheck } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%", // Trigger earlier
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      const cards = Array.from(cardsRef.current?.children || [])
      
      gsap.from(cards, {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%", // Trigger earlier
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="pricing" className="py-32 px-4 md:px-8 bg-[#F3F3EF]">
      <div className="max-w-7xl mx-auto">
        <h2 ref={titleRef} className="text-center text-5xl md:text-7xl font-black uppercase font-syne mb-16 text-black">Investment</h2>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic */}
          <div className="bg-white text-black p-8 border border-black/10 flex flex-col hover:border-black transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="mb-8">
              <h3 className="text-xl font-bold uppercase mb-2">Starter</h3>
              <p className="text-3xl font-syne font-bold group-hover:text-neutral-600 transition-colors">€ 900+</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4" /> One Page Website</li>
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4" /> Responsive Design</li>
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4" /> Basic SEO</li>
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4" /> 1 Week Delivery</li>
            </ul>
            <Button className="w-full rounded-none bg-black text-white hover:bg-neutral-800 transition-all duration-300 group-hover:scale-[1.02]">Select Plan</Button>
          </div>

          {/* Pro */}
          <div className="bg-black text-white p-8 border border-black flex flex-col transform md:-translate-y-4 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-6 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all duration-500 group-hover:scale-150"></div>
            <div className="text-xs font-mono uppercase text-yellow-400 mb-2 relative z-10">Most Popular</div>
            <div className="mb-8 relative z-10">
              <h3 className="text-xl font-bold uppercase mb-2">Professional</h3>
              <p className="text-3xl font-syne font-bold">€ 2,400+</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-neutral-300 relative z-10">
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4 text-white" /> Multi-page Website</li>
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4 text-white" /> CMS Integration</li>
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4 text-white" /> Advanced Animations</li>
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4 text-white" /> 2-3 Weeks Delivery</li>
            </ul>
            <Button className="w-full rounded-none bg-white text-black hover:bg-neutral-200 relative z-10 transition-all duration-300 group-hover:scale-[1.02]">Select Plan</Button>
          </div>

          {/* Video */}
          <div className="bg-white text-black p-8 border border-black/10 flex flex-col hover:border-black transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
            <div className="mb-8">
              <h3 className="text-xl font-bold uppercase mb-2">Video Edit</h3>
              <p className="text-3xl font-syne font-bold group-hover:text-neutral-600 transition-colors">€ 500+</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4" /> Up to 1 min duration</li>
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4" /> Sound Design</li>
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4" /> Color Grading</li>
              <li className="flex gap-3 text-sm"><FaCheck className="w-4 h-4" /> VFX & Transitions</li>
            </ul>
            <Button className="w-full rounded-none bg-black text-white hover:bg-neutral-800 transition-all duration-300 group-hover:scale-[1.02]">Select Plan</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
