"use client";

const ProfileContainer = ({ children }) => {
    return (
        <div className="
        flex
        items-center
        p-3
        justify-center
        
        sm:px-36
        
        md:p-4
        md:w-2/4
        
        lg:px-20
        lg:justify-end
        
        xl:px-40
        
        ">
            {children}
        </div>
    )
}

export default ProfileContainer