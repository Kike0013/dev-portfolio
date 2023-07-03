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
      <div className="py-8 lg:flex">
        <div className="flex flex-col justify-center items-center lg:pe-8 lg:items-end lg:w-2/4">
          <ContactForm />
        </div>
        <div className="flex sm:justify-center ps-8 lg:justify-start xl:text-xl xl:w-2/4">
          <div>
            <IconContext.Provider value={{ size: 40, color: "#FFC612" }} >
              <a href={"https://www.linkedin.com/in/mellarafael/"} target='_blank' className="flex gap-3 my-6 hover:text-[#FFC612] w-fit items-center">
                <BsLinkedin /> <span className="hidden sm:block">https://www.linkedin.com/in/mellarafael/</span>
              </a>
              <div className="flex gap-4 items-center mb-6">
                <a href={"mailto:kike0013pro@gmail.com"} target='_blank' className="flex gap-3 hover:text-[#FFC612] w-fit items-center items-center">
                  <CgMail /> <span className="hidden sm:block">kike0013pro@gmail.com</span>
                </a>
                <MdOutlineContentCopy size={25} color="#4EC9B0" className="cursor-pointer" onClick={() => navigator.clipboard.writeText("kike0013pro@gmail.com")} />
              </div>
              <div className="flex gap-4 items-center mb-6">
                <a href={"https://wa.me/18498752455"} target='_blank' className="flex gap-3 hover:text-[#FFC612] w-fit items-center">
                  <MdSmartphone /> <span className="hidden sm:block">+1(849) 875-2455</span>
                </a>
                <MdOutlineContentCopy size={25} color="#4EC9B0" className="cursor-pointer" onClick={() => navigator.clipboard.writeText("18498752455")} />
              </div>
              <a href={"https://github.com/Kike0013"} target='_blank' className="flex gap-3 mb-6 hover:text-[#FFC612] w-fit items-center">
                <BsGithub /> <span className="hidden sm:block">https://github.com/Kike0013</span>
              </a>
              <a href={"https://mellarafael.vercel.app/"} target='_blank' className="flex gap-3 mb-6 hover:text-[#FFC612] w-fit items-center">
                <TbWorldWww /> <span className="hidden sm:block">https://mellarafael.vercel.app/</span>
              </a>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </ContentContainer>
  )
}

export default Contact