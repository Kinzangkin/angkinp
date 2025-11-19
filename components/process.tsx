"use client"

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      // Title sticky animation
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: titleRef.current,
          pinSpacing: false,
        }
      })

      // Steps stagger animation
      const steps = gsap.utils.toArray('.process-step')
      gsap.from(steps, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const number = e.currentTarget.querySelector('.step-number')
    gsap.to(number, {
      scale: 1.2,
      x: 10,
      color: "#000",
      duration: 0.4,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const number = e.currentTarget.querySelector('.step-number')
    gsap.to(number, {
      scale: 1,
      x: 0,
      color: "#e5e5e5", // neutral-200
      duration: 0.4,
      ease: "power2.out"
    })
  }

  const steps = [
    { number: "01", title: "Define", desc: "Understanding goals & requirements" },
    { number: "02", title: "Design", desc: "Visualizing the concept & flow" },
    { number: "03", title: "Build", desc: "Development & editing magic" },
    { number: "04", title: "Deliver", desc: "Launch, polish & handoff" },
  ]

  return (
    <section id="process" ref={containerRef} className="py-24 px-4 md:px-8 bg-white border-y border-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <div ref={titleRef} className="md:sticky md:top-32">
              <h2 className="text-4xl font-black uppercase font-syne">How I Work</h2>
            </div>
          </div>
          
          <div className="md:w-2/3 grid grid-cols-1 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="process-step flex gap-6 group cursor-default"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="step-number font-syne text-6xl font-bold text-neutral-200 transition-colors duration-300">
                  {step.number}
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold uppercase mb-2">{step.title}</h3>
                  <p className="text-neutral-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
