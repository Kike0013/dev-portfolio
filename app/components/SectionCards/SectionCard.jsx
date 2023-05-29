"use client";

import Link from "next/link";

const SectionCard = ({ data }) => {

    const { title, url } = data;

    return (
        <div className="
        w-full
        flex
        items-center
        
        md:first:border-l
        md:first:border-t
        md:last:border-r
        md:last:border-b
        
        md:first:rounded-tl-xl
        md:last:rounded-br-xl
        
        
        sm:bg-[#1f1f1f]        

        md:h-44
        ">
            <div
                className="
        grid 
        justify-self-center
        bg-white 
        text-black 
        w-full
        border 
        border-4 
        border-teal-300
        text-xs
        text-center
        h-4/5
        my-5       
        
        md:rounded-lg 
        
        md:m-5

        lg:text-lg
        ">
                <div className="flex flex-col items-center justify-center">
                    <Link href={url}>
                        <div className="font-semibold sm:text-lg md:text-xl">{title}</div>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default SectionCard