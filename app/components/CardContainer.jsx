"use client";

const CardContainer = ({ children }) => {
    return (
        <div className="
        flex
        justify-center
        p-3
        pt-0
        
        sm:px-40
        
        md:px-0
        md:w-2/4
        
        lg:p-24
        lg:py-0
        lg:justify-start">
            {children}
        </div>
    )
}

export default CardContainer