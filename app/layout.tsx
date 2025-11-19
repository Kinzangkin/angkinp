import type { Metadata } from "next"
import { Inter, Syne } from 'next/font/google'
import "./globals.css"
import { SmoothScroll } from "@/components/smooth-scroll"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" })

export const metadata: Metadata = {
  title: "Kinz | Frontend Developer & Video Editor",
  description: "Portfolio of Kinz - Frontend Developer and Video Editor.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased bg-[#0d0d0d] text-white selection:bg-white selection:text-black`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
