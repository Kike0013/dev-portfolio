import Image from 'next/image'
import React from 'react'

const Slider = ({ images }) => {
    return (
        <div className="flex gap-2 px-4">
            {images.map((el, i) => {
                return <div key={i} className='w-[400px] h-[400px] bg-[#f3f3f3] border-2 p-2 mb-4' >
                    <Image
                        className='object-contain aspect-square'
                        src={`/images/projects/slider/${el}.png`}
                        width={400}
                        height={400}
                        alt="img"
                    />
                </div>
            })}
        </div >
    )
}

export default Slider