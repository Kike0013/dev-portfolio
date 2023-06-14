"use client";

import Image from "next/image";

const ProfilePicture = () => {
  return (
    <div
      className="
        w-[180px]
        h-[180px]

        sm:w-[200px]
        sm:h-[200px]
        
        xl:w-[240px]
        xl:h-[240px]"
    >
      <Image
        src="/images/profile_picture.png"
        alt="Profile picture"
        width={240}
        height={240}
      />
    </div>
  )
}

export default ProfilePicture