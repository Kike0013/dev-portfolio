"use client"

import SectionCard from "./SectionCard"

const SectionCards = ({ sectionData }) => {
    return (
        <div className="
        grid
        content-center
        w-full
        max-w-md
        
        md:[&>*:nth-child(2)]:border-t
        md:[&>*:nth-child(2)]:border-r
        md:[&>*:nth-child(3)]:border-l
        md:[&>*:nth-child(3)]:border-b
        md:[&>*:nth-child(2)]:rounded-tr-xl
        md:[&>*:nth-child(3)]:rounded-bl-xl
        md:grid-cols-2
        md:max-w-md
        
        lg:max-w-md
        ">
            {sectionData.map((el, i) => {
                return <SectionCard data={el} key={i} />
            })}
        </div>
    )
}

export default SectionCards