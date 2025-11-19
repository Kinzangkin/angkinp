"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    const ctx = gsap.context(() => {
      gsap.from(".contact-title", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })

      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    gsap.to(e.target, {
      scale: 1.02,
      borderColor: "#fff",
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    gsap.to(e.target, {
      scale: 1,
      borderColor: "#262626", // neutral-800
      duration: 0.3,
      ease: "power2.out"
    })
  }

  return (
    <section id="contact" ref={containerRef} className="py-32 px-4 md:px-8 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <div className="contact-title">
          <h2 className="text-5xl md:text-8xl font-black uppercase font-syne mb-8">Lets Talk</h2>
          <p className="text-xl text-neutral-400 mb-12">
            Ready to start your project? Let’s create something together.
          </p>
        </div>

        <form ref={formRef} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase ml-1">Name</label>
              <Input 
                className="bg-neutral-900 border-neutral-800 h-12 rounded-none focus:ring-0 transition-none" 
                placeholder="Your Name" 
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase ml-1">Email</label>
              <Input 
                className="bg-neutral-900 border-neutral-800 h-12 rounded-none focus:ring-0 transition-none" 
                placeholder="your@email.com" 
                type="email" 
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase ml-1">Message</label>
            <Textarea 
              className="bg-neutral-900 border-neutral-800 min-h-[150px] rounded-none focus:ring-0 transition-none" 
              placeholder="Tell me about your project..." 
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <Button className="w-full h-14 text-lg font-bold uppercase tracking-widest bg-white text-black hover:bg-neutral-200 rounded-none transition-all hover:scale-[1.02] active:scale-[0.98]">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  )
}
