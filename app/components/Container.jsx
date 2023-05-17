"use client";

const Container = ({ children }) => {
    return (
        <div className="
        grid
        grid-cols-2
        place-content-center
        p-[20px]
        gap-20
        w-full
        ">
            {children}
        </div>
    )
}

export default Container