"use client";

import Details from "./Details";
import ProfilePicture from "./ProfilePicture";
import profileData from '../../data/profileDetails'

const MainCard = () => {
  return (
    <div className="
    bg-[#1f1f1f]
    w-full
    flex
    flex-col
    items-center 
    border 
    border-[#BCBCBC] 
    shadow-[0_0px_3px_3px_rgba(78,201,176,1)]
    h-auto 
    max-w-lg

    lg:rounded-xl
    ">
      <div className="pe-4 flex items-center justify-center">
        <p className="text-[#808073] text-3xl">&lt;</p>
        <ProfilePicture />
      </div>
      <div className="lg:w-70 xl:w-78">
        {profileData.map((el, i) => {
          return <Details data={el} key={i} />
        })}
      </div>
      <div className="flex justify-center">
        <p className="text-[#808073] text-3xl pb-5">/&gt;</p>
      </div>
    </div>
  )
}

export default MainCard