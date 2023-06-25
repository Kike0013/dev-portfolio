"use client"
import { VscCloseAll } from 'react-icons/vsc'

const ProjectDetailContainer = ({ setShowDetail, children }) => {
    return (
        <div className='
        fixed
        top-0
        bg-neutral-600
        bg-opacity-80
        w-full
        h-screen
        overflow-auto
        flex
        justify-center
        '>
            <div className='bg-white overflow-auto h-screen w-full max-w-[1280px] text-black p-5'>
                <div>
                    <div className="w-full text-right">
                        <button onClick={() => setShowDetail(false)} className="me-5 mb-3">
                            <VscCloseAll size={36}/>
                        </button>
                    </div>
                    {children}
                </div>
            </div>
        </div>

    )
}

export default ProjectDetailContainer