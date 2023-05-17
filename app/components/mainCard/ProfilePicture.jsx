"use client";

import Image from "next/image";

const ProfilePicture = () => {
  return (
    <Image 
        src="/images/profile_pictured.png"
        width="400"
        height="400"
        alt="Profile picture"
        />
  )
}

export default ProfilePicture