"use client"

const ProjectDetail = ({ setShowDetail, projectData }) => {
    return (
        <div className='
        fixed
        top-0
        bg-neutral-600
        bg-opacity-80
        p-10
        w-full
        h-screen
        overflow-auto
        flex
        justify-center
        '>
            <div className='bg-white overflow-auto h-[768px] w-full max-w-[1280px] text-black p-5'>
                <button onClick={() => setShowDetail(false)} className="w-full text-right pe-5 pt-4">X</button>
                <h1 className="text-2xl ps-2 mb-4 font-bold">Experience</h1>
                {projectData.experience.map((el, i) => {
                    return <div key={i}>
                        <div className="mb-5 flex">
                            <div className="flex">
                                <div className="flex flex-col items-center w-[250px]">
                                    <img className='w-[200px]' src={`/images/projects/logos/${el.card.img}.svg`} />
                                    <div className="text-center font-semibold">{el.card.description}</div>
                                </div>
                                <div>
                                    <div className="h-2/4 flex flex-col-reverse font-bold text-3xl"><span>{el.card.name}</span></div>
                                    <div className="h-2/4">{el.links.map((el, i) => {
                                        return <div><a key={i} href={el} target="_blank">{el}</a><br /></div>
                                    })}</div>
                                </div>
                            </div>
                            <div className="max-w-[700px] px-4">
                                <p className="text-lg">{el.card.detail}</p>
                            </div>
                        </div>
                        <div className="border-b">
                            Images
                        </div>
                    </div>
                })
                }
                <h1 className="text-2xl ps-2 mb-4 font-bold">Personal Projects</h1>
                {projectData.personal.map((el, i) => {
                    return <div key={i}>
                        <div className="mb-5 flex">
                            <div className="flex">
                                <div className="flex flex-col items-center w-[250px]">
                                    <img className='w-[200px]' src={`/images/projects/logos/${el.card.img}.svg`} />
                                    <div className="text-center font-semibold">{el.card.description}</div>
                                </div>
                                <div>
                                    <div className="h-2/4 flex flex-col-reverse font-bold text-3xl"><span>{el.card.name}</span></div>
                                    <div className="h-2/4">{el.links.map((el, i) => {
                                        return <div><a key={i} href={el} target="_blank">{el}</a><br /></div>
                                    })}</div>
                                </div>
                            </div>
                            <div className="max-w-[700px] px-4">
                                <p className="text-lg">{el.card.detail}</p>
                            </div>
                        </div>
                        <div className="border-b">
                            Images
                        </div>
                    </div>
                })
                }
                <h1 className="text-2xl ps-2 mb-4 font-bold">Other Relevant Work Experience</h1>
                {projectData.other.map((el, i) => {
                    return <div key={i}>
                        <div className="mb-5 flex">
                            <div className="flex">
                                <div className="flex flex-col items-center w-[250px]">
                                    <img className='w-[200px]' src={`/images/projects/logos/${el.card.img}.svg`} />
                                    <div className="text-center font-semibold">{el.card.description}</div>
                                </div>
                                <div>
                                    <div className="h-2/4 flex flex-col-reverse font-bold text-3xl"><span>{el.card.name}</span></div>
                                    <div className="h-2/4">{el.links.map((el, i) => {
                                        return <div><a key={i} href={el} target="_blank">{el}</a><br /></div>
                                    })}</div>
                                </div>
                            </div>
                            <div className="max-w-[700px] px-4">
                                <p className="text-lg">{el.card.detail}</p>
                            </div>
                        </div>
                        <div className="border-b">
                            Images
                        </div>
                    </div>
                })
                }



            </div>
        </div>
    )
}

export default ProjectDetail