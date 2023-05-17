"use client";

import Details from "./Details";
import ProfilePicture from "./ProfilePicture";
import profileData from '../../data/profileDetails'

const MainCard = () => {
  return (
    <div>
      <div className="flex items-center">
        <p className="text-[#808073] text-5xl">&lt;</p>
        <ProfilePicture />
      </div>
      {profileData.map(el => {
        return <Details data={el} />
      })}
      <div>
        <p className="text-[#808073] text-5xl">/&gt;</p>
      </div>
    </div>
  )
}

export default MainCard