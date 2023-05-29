"use client"

import CardContainer from './components/CardContainer';
import sectionData from './data/sectionCards'
import ProfileContainer from './components/ProfileContainer';
import MainCard from './components/mainCard/MainCard';
import SectionCards from './components/SectionCards/SectionCards';

export default function Home() {

  return (
    <div>
      <main >
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
