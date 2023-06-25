import Image from 'next/image'
import React from 'react'
import { IoIosReturnLeft } from 'react-icons/io'

const Gallery = ({ images, setViewGallery }) => {
  return (
    <div className='flex flex-col'>
      <div className='fixed pt-4 ps-4'>
        <button onClick={() => setViewGallery(false)} className='ps-4'>
          <IoIosReturnLeft size={40} color='#FFC612' />
        </button>
      </div>
      <div className='flex mt-16'>
        {images.map((el, i) => {
          return <div key={i} className='w-[900px] h-[900px] bg-[#f3f3f3] border-2 p-2 mb-4' >
            <Image
              className='object-contain aspect-square'
              src={`/images/projects/slider/${el}.png`}
              width={900}
              height={900}
              alt="img"
            />
          </div>
        })}
      </div>
    </div>
  )
}

export default Gallery