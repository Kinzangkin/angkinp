"use client"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from(footerRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out"
    })
  }, [])

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      y: -3,
      color: "#000",
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      color: "#404040", // neutral-700
      duration: 0.3,
      ease: "power2.out"
    })
  }
  const socials = [
    { name: "Whatsapp", url: "http://wa.me/6285823402339" },
    { name: "Instagram", url: "https://www.instagram.com/vz.kinz" },
    { name: "tiktok", url: "https://www.tiktok.com/@angkin142" },
    { name: "GitHub", url: "https://github.com/Kinzangkin" },
  ]


  return (

    <footer ref={footerRef} className="bg-[#F3F3EF] py-12 px-4 md:px-8 border-t border-black/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-bold uppercase tracking-wider">
          © 2025 Kinz. All rights reserved.
        </div>
        <div className="flex gap-8">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-mono uppercase text-neutral-700"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {item.name}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
