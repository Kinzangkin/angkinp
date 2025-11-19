import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Process } from "@/components/process"
import { Pricing } from "@/components/pricing"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3F3EF]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
