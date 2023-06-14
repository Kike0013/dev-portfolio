"use client"

import Image from "next/image"

const ProjectDetail = ({ data, title }) => {

    return (
        <>
            <h1 className="text-2xl ps-2 mb-4 font-bold">{title}</h1>
            {data.map((el, i) => {
                return <div key={i} className="my-5">
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
                                    return <div key={i}><a href={el} target="_blank">{el}</a><br /></div>
                                })}
                            </div>

                        </div>
                        <div className="max-w-[700px] px-4">
                            <p className="text-lg">{el.card.detail}</p>
                        </div>
                    </div>
                    <div className="border-b">
                        {/* Images */}
                    </div>
                </div>
            })}
        </>
    )
}

export default ProjectDetail