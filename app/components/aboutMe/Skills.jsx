"use client"

import Image from 'next/image'
import skillsData from '../../data/skillsData'

const Skills = () => {
    return (
        <div className='flex flex-wrap p-4 pt-8 gap-2 sm:justify-center xl:max-w-[255px]'>
            {skillsData.map(el => {
                return <div className='w-[35px] sm:w-[50px]' key={el.num}>
                    <Image
                        src={`/images/skills/${el.num}.svg`}
                        alt={el.alt}
                        width={50}
                        height={50}
                    />
                </div>
            })}
        </div>
    )
}

export default Skills