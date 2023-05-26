"use client"
import { useEffect, useRef, useState } from 'react';
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import SectionCard from './components/SectionCards/SectionCard';
import CardContainer from './components/CardContainer';
import sectionData from './data/sectionCards'
import ProfileContainer from './components/ProfileContainer';
import MainCard from './components/mainCard/MainCard';
import SectionCards from './components/SectionCards/SectionCards';

export default function Home() {

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
          minHeight: 200.00,
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
    <div>
      <main ref={bgRef}>
        {/* <main> */}
        <div className='
        flex 
        h-screen 
        flex-col

        md:flex-row
        '>
          <ProfileContainer>
            <MainCard />
          </ProfileContainer>
          <CardContainer>
            <SectionCards sectionData={sectionData} />
          </CardContainer>
        </div>
      </main>
    </div>
  )
}
