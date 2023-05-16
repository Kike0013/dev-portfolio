"use client"
import { useEffect } from "react"
import { Source_Code_Pro } from 'next/font/google'
import './globals.css'

const inter = Source_Code_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {

  useEffect(() => {
    const threeScript = document.createElement("script");
    const vantaScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript");
    vantaScript.setAttribute("id", "vantaScript");
    threeScript.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
    );
    vantaScript.setAttribute(
      "src",
      "https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js"
    );

    document.getElementsByTagName("head")[0].appendChild(threeScript)
    document.getElementsByTagName("head")[0].appendChild(vantaScript)

    return () => {
      if (threeScript || vantaScript) {
        threeScript.remove()
        vantaScript.remove()
      }
    }
  },
    [])

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
