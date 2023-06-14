"use client"

import Link from "next/link"
import menuItems from '../../data/sectionCards'
import { FaHome } from 'react-icons/fa'

const Navbar = ({ pathname }) => {

  const active = 'border-b-8 bg-[#4EC9B040] text-[#FFC612]'

  return (
    <nav className="bg-[#252525] h-16">
      <div className="flex justify-center h-full">
        <ul className="
        flex
        justify-around
        items-center
        w-full
        max-w-7xl
        text-xs
        sm:text-xl
        ">
          <li className="mx-4 pe-4 border-r"><Link href={'/'}><FaHome size={35} /></Link></li>
          {menuItems.map((el, i) => {
            return <li key={i}
              className={`
              h-full
              w-full
              flex
              justify-center
              items-center
              text-center
              hover:bg-[#4EC9B040]
              border-b-[#FFC612]
              ${pathname === el.url ? active : null}
              `}><Link href={el.url}>{el.title}</Link></li>
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar