"use client";

const ProfileContainer = ({ children }) => {
    return (
        <div className="
        flex
        items-start
        p-3
        justify-center
        
        sm:px-36
        
        md:p-4
        md:w-2/4
        md:mt-48
        
        lg:px-20
        lg:justify-end
        lg:mt-24
        
        xl:px-40
        
        ">
            {children}
        </div>
    )
}

export default ProfileContainer