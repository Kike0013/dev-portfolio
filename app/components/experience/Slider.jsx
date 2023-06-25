import Image from 'next/image'
import React, { useState } from 'react'
import Gallery from './Gallery'

const Slider = ({ images }) => {

    const [viewGallery, setViewGallery] = useState(false)

    return (<>
        <div className="flex gap-2 px-4">
            {images.map((el, i) => {
                return <div key={i} className='w-[400px] h-[400px] bg-[#f3f3f3] border-2 p-2 mb-4' >
                    <Image
                        onClick={() => setViewGallery(true)}
                        className='object-contain aspect-square cursor-pointer'
                        src={`/images/projects/slider/${el}.png`}
                        width={400}
                        height={400}
                        alt="img"
                    />
                </div>
            })}
        </div >
        {viewGallery && <div className="flex fixed top-0 left-0 w-full h-screen overflow-x-auto bg-gray-500">
            <Gallery images={images} setViewGallery={setViewGallery} />
        </div>}
    </>)
}

export default Slider