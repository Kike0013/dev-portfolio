"use client"

const ProjectDetailContainer = ({ setShowDetail, children }) => {
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
                <div>
                    <div className="w-full text-right">
                        <button onClick={() => setShowDetail(false)} className="pe-5 pt-4">X</button>
                    </div>
                    {children}
                </div>
            </div>
        </div>

    )
}

export default ProjectDetailContainer