"use client"

import skillsData from '../../data/skillsData'

const Skills = () => {
    return (
        <div className='flex flex-wrap p-4 pt-8 gap-2 sm:justify-center xl:max-w-[255px]'>
            {skillsData.map(el => {
                return <img
                    className='
                        w-[35px]
                        sm:w-[50px]'
                    src={`/images/skills/${el.num}.svg`}
                    alt={el.alt}
                    key={el.num}
                />
            })}
        </div>
    )
}

export default Skills