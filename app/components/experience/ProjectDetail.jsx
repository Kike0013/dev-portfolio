"use client"

import Image from "next/image"
import Slider from "./Slider"

const ProjectDetail = ({ data, title }) => {

    return (
        <>
            <h1 className="text-2xl ps-2 mb-4 font-bold p-2 bg-slate-400">{title}</h1>
            {data.map((el, i) => {
                return <div key={i} className="my-5 border-2 border-[#4EC9B0] bg-gray-200 py-5 px-2">
                    <div className="mb-5 flex">
                        <div>
                            <div className="flex">
                                <div className="flex flex-col items-center w-[250px]">
                                    <Image src={`/images/projects/logos/${el.card.img}.svg`} width={200} height={200} alt="logo" />
                                </div>
                                <div>
                                    <div className="h-2/4 flex flex-col-reverse font-bold text-3xl"><span>{el.card.name}</span></div>
                                    <div className="font-semibold w-[150px]">{el.card.description}</div>
                                </div>
                            </div>
                            <div>
                                {el.links.map((el, i) => {
                                    return <div key={i} className="ps-6 border-b-4 border-[#4EC9B0] hover:text-blue-700"><a href={el} target="_blank">{el}</a><br /></div>
                                })}
                            </div>
                        </div>
                        <div className="max-w-[700px] px-4">
                            <p className="text-lg">{el.card.detail}</p>
                        </div>
                    </div>
                    {el?.images && <div className="flex overflow-x-auto">
                        <Slider images={el.images} />
                    </div>}
                </div>
            })}
        </>
    )
}

export default ProjectDetail