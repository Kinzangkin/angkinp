"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
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

      // Animate tab content when it changes or on scroll
      // Note: Since tabs change content dynamically, we might need to re-run animations or just animate the container
      gsap.from(tabsRef.current, {
        scrollTrigger: {
          trigger: tabsRef.current,
          start: "top 75%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="projects" className="py-32 px-4 md:px-8 bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto">
        <div ref={titleRef} className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase font-syne mb-4">Selected Work</h2>
          <div className="h-px w-full bg-white/20 origin-left hover:scale-x-100 transition-transform duration-1000"></div>
        </div>

        <div ref={tabsRef}>
          <Tabs defaultValue="web" className="w-full">
            <div className="flex justify-end mb-8">
              <TabsList className="bg-transparent border border-white/20 rounded-full p-1 h-auto">
                <TabsTrigger 
                  value="web" 
                  className="rounded-full px-6 py-2 text-sm uppercase font-bold text-neutral-400 data-[state=active]:bg-white data-[state=active]:text-black transition-all hover:text-white"
                >
                  Web Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="video" 
                  className="rounded-full px-6 py-2 text-sm uppercase font-bold text-neutral-400 data-[state=active]:bg-white data-[state=active]:text-black transition-all hover:text-white"
                >
                  Video Edits
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="web" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-16/10 bg-neutral-900 overflow-hidden border border-white/10 mb-4">
                      <Image
                        src={`/img/3.jpg`}
                        alt={`Project ${i}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      {/* Hover overlay with "View Project" */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white text-black px-6 py-2 font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Project
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold uppercase group-hover:text-neutral-300 transition-colors">Project Name {i}</h3>
                        <p className="text-sm text-neutral-400 font-mono">Next.js / Tailwind / Framer</p>
                      </div>
                      <span className="text-xs font-mono border border-white/20 px-2 py-1 rounded-full group-hover:bg-white group-hover:text-black transition-colors">2024</span>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="video" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="relative aspect-9/16 bg-neutral-900 overflow-hidden border border-black mb-4">
                      <Image
                        src={`/img/3.jpg`}
                        alt={`Edit ${i}`}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-10 border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold uppercase group-hover:text-neutral-300 transition-colors">Edit Title {i}</h3>
                    <p className="text-xs text-neutral-500 font-mono">After Effects</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
