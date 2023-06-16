"use client"

import ContentContainer from "@/app/components/ContentContainer"
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdSmartphone, MdOutlineContentCopy } from 'react-icons/md'
import { IconContext } from 'react-icons'
import { CgMail } from 'react-icons/cg'
import { TbWorldWww } from 'react-icons/tb'
import ContactForm from "@/app/components/contact/ContactForm"

const Contact = () => {

  return (
    <ContentContainer>
      <div className="flex py-8">
        <div className="w-2/4 flex flex-col justify-center items-end pe-8">
          <ContactForm />
        </div>
        <div className="text-xl w-2/4 ps-8">
          <IconContext.Provider value={{ size: 40, color: "#FFC612" }} >
            <a href={"https://www.linkedin.com/in/mellarafael/"} target='_blank' className="flex gap-3 my-6 hover:text-[#FFC612] w-fit items-center">
              <BsLinkedin /> https://www.linkedin.com/in/mellarafael/
            </a>
            <div className="flex gap-4 items-center mb-6">
              <a href={"mailto:kike0013pro@gmail.com"} target='_blank' className="flex gap-3 hover:text-[#FFC612] w-fit items-center items-center">
                <CgMail /> kike0013pro@gmail.com
              </a>
              <MdOutlineContentCopy size={25} color="#4EC9B0" className="cursor-pointer" onClick={() => navigator.clipboard.writeText("kike0013pro@gmail.com")} />
            </div>
            <div className="flex gap-4 items-center mb-6">
              <a href={"https://wa.me/18498752455"} target='_blank' className="flex gap-3 hover:text-[#FFC612] w-fit items-center">
                <MdSmartphone /> +1(849) 875-2455
              </a>
              <MdOutlineContentCopy size={25} color="#4EC9B0" className="cursor-pointer" onClick={() => navigator.clipboard.writeText("18498752455")} />
            </div>
            <a href={"https://github.com/Kike0013"} target='_blank' className="flex gap-3 mb-6 hover:text-[#FFC612] w-fit items-center">
              <BsGithub /> https://github.com/Kike0013
            </a>
            <a href={"https://mellarafael.vercel.app/"} target='_blank' className="flex gap-3 mb-6 hover:text-[#FFC612] w-fit items-center">
              <TbWorldWww /> https://mellarafael.vercel.app/
            </a>
          </IconContext.Provider>
        </div>
      </div>
    </ContentContainer>
  )
}

export default Contact