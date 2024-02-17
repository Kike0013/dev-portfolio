"use client"

import { usePathname } from 'next/navigation'
import Head from 'next/head';
import { Source_Code_Pro } from 'next/font/google'
import { useEffect, useRef, useState } from 'react';
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import './globals.css'
import Navbar from './components/navbar/Navbar';
// import ToastWarning from './components/ToastWarning';

const font = Source_Code_Pro({ subsets: ['latin'] })

export const metadata = {
  title: 'Enrique Mella - Frontend Developer',
  description: 'Welcome to my personal portfolio!',
}

export default function RootLayout({ children }) {

  const pathname = usePathname()

  /* const inDevelopment = [ *//* "/experience", */ /* "/cv", */ /* "/contact" *//* ].includes(pathname) */
  // const [isOpen, setIsOpen] = useState(true)

  // useEffect(() => {
  //   inDevelopment && setIsOpen(true)
  // }, [pathname])

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


  const [bgEffect, setBgEffect] = useState(0)
  const bgRef = useRef(null)

  useEffect(() => {
    if (!bgEffect) {
      setBgEffect(
        NET({
          el: bgRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 900.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x4ec9b0,
          backgroundColor: 0x1f1f2f,
          points: 20.00,
          maxDistance: 21.00,
          spacing: 20.00,
          showDots: false
        })
      )
    }

    return () => {
      if (bgEffect) bgEffect.destroy()
    }

  }, [bgEffect])

  return (
    <html lang="en">
      <Head>
        <title>Enrique Mella - Frontend Developer</title>
        <meta name='description' content='Personal Portfolio' />
      </Head>
      <body className={`${font.className}`}>
        <main ref={bgRef} className='h-screen'>
          <div className='z-9999'>
            {pathname !== '/' ? <Navbar pathname={pathname} /> : null}
            {children}
            {/* {isOpen && inDevelopment && <ToastWarning setIsOpen={setIsOpen} />} */}
          </div>
        </main>
      </body>
    </html>
  )
}
