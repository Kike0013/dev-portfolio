"use client"

import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaFileDownload } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { IconContext } from 'react-icons'
import Link from 'next/link'

const QuickContact = () => {
    return (
        <div className="
            boder
            border-b
            flex
            p-1
            pb-2
            gap-3
            
        ">
            <IconContext.Provider value={{ size: 26 }}>
                <a href={"https://www.linkedin.com/in/mellarafael/"} target='_blank'><BsLinkedin /></a>
                <a href={"https://github.com/Kike0013"} target='_blank'><BsGithub /></a>
                <Link href={"/experience"}><FaFileDownload /></Link>
                <Link href={"/contact"}><MdMessage /></Link>
            </IconContext.Provider>
        </div>
    )
}

export default QuickContact