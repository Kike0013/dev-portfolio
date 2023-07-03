import { VscChromeClose } from 'react-icons/vsc'

const ToastContactForm = ({ message, bgColor, setSuccess }) => {
    return (
        <div className={`${bgColor} p-5 text-black flex justify-between`}>
            <div className="text-center">
                {message}
            </div>
            <div className="text-end">
                <button onClick={() => setSuccess(null)}><VscChromeClose /></button>
            </div>
        </div>
    )
}

export default ToastContactForm