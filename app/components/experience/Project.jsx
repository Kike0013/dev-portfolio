"use client"

const Project = ({ data, title }) => {
    return (
        <>
            <h1 className="text-2xl ps-2 mb-2">{title}</h1>
            <div className="flex gap-6 ps-2 mb-5 overflow-x-auto">
                {data.map((el, i) => {
                    return <div key={i} className="flex gap-2">
                        <div className="bg-white h-fit p-2 flex flex-col gap-2 rounded-l-xl min-w-[46px]">
                            {el.icons.map((el, i) => {
                                return <div key={i}><img className='w-[30px]' src={`/images/projects/icons/${el}.svg`} /></div>
                            })}
                        </div>
                        <div className='bg-white border-4 border-[#4EC9B0] rounded-r-xl text-black w-[160px] h-[160px]'>
                            <div className='flex flex-col items-center border-black border-b-2 mx-3'>
                                <img className='mt-2 w-[60px]' src={`/images/projects/logos/${el.card.img}.svg`} />
                                <span className='text-2xl font-bold mt-2'>{el.card.name}</span>
                            </div>
                            <div className='text-center text-sm'>
                                <p>{el.card.description}</p>
                            </div>
                        </div>
                    </div >
                })}
            </div>
        </>
    )
}

export default Project