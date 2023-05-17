"use client";

const Sidebar = ({children}) => {
    return (
        <div className="bg-[#1f1f1f] flex items-center h-screen px-10">
            {children}
        </div>
    )
}

export default Sidebar