
const ToastWarning = ({ setIsOpen }) => {
    return (
        <div className="fixed bottom-0 right-0 border max-w-xs p-4 pt-2 m-4 bg-red-300 text-black font-semibold shadow-md shadow-white">
            <div className="w-full text-right pe-4 mb-1">
                <button className="border px-4 text-white hover:text-black hover:bg-white hover:border-black"
                    onClick={() => setIsOpen(false)}
                >X</button>
            </div>
            <span>This section is still under development. Some content may not be displayed as intended.</span>
        </div>
    )
}

export default ToastWarning