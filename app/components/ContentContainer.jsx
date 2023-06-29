
const ContentContainer = ({ children }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="
    m-4
    bg-[#1f1f1f]
    w-full
    max-w-[1980px]
    p-4
    
    xl:m-10
    xl:mt-4
    xl:p-10
    xl:pt-4
    ">
        {children}
      </div>
    </div>
  )
}

export default ContentContainer