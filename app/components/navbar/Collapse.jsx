"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'

const Collapse = ({ menuItems, pathname }) => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        showMobileMenu && setShowMobileMenu(false)
    }, [pathname])

    return (<>
        <div className='inline md:hidden relative'>
            <button onClick={() => setShowMobileMenu(prev => !prev)}>
                <FaBars size={35} color={showMobileMenu ? "#FFC612" : "#fff"} />
            </button>
        </div>
        {showMobileMenu
            ? <ul className='absolute bg-[#252525] left-0 p-8 w-full text-center text-2xl h-screen md:hidden z-50'>
                {menuItems.map((el, index) => {
                    return <li key={index}
                        className={`my-4 py-4 ${pathname === el.url && "border border-[#FFC612] bg-[#4EC9B040]"}`
                        }>
                        <Link href={el.url}>{el.title}</Link>
                    </li>
                })}
            </ul >
            : null}
    </>
    )
}

export default Collapse