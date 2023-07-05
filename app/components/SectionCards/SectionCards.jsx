"use client"

import SectionCard from "./SectionCard"

const SectionCards = ({ sectionData }) => {
    return (
        <div className="
        grid
        content-start
        w-full
        max-w-md
        h-fit
        
        md:[&>*:nth-child(2)]:border-t
        md:[&>*:nth-child(2)]:border-r
        md:[&>*:nth-child(3)]:border-l
        md:[&>*:nth-child(3)]:border-b
        md:[&>*:nth-child(2)]:rounded-tr-xl
        md:[&>*:nth-child(3)]:rounded-bl-xl
        md:rounded-xl
        md:shadow-[0_0px_3px_3px_rgba(78,201,176,1)]
        md:grid-cols-2
        md:max-w-md
        md:mt-60
        
        lg:mt-72
        lg:max-w-md
        ">
            {sectionData.map((el, i) => {
                return <SectionCard data={el} key={i} />
            })}
        </div>
    )
}

export default SectionCards