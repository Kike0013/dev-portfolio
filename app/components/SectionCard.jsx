"use client";

const SectionCard = ({ data }) => {

    const { title } = data;

    return (
        <div
            className="
        grid 
        justify-self-center 
        bg-white 
        text-black 
        w-[400px] 
        h-[270px] 
        radius-25 
        rounded-lg 
        border 
        border-4 
        border-teal-300 
        text-3xl
        text-center
        ">
            <div className="flex flex-col items-center justify-center">
                <div>{title}</div>
            </div>
        </div>
    )
}

export default SectionCard