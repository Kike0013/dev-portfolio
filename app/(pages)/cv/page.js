import ContentContainer from "@/app/components/ContentContainer"
import { MdOutlineOpenInNew } from 'react-icons/md'
import { FaFileDownload } from 'react-icons/fa'

const Cv = () => {

  return (
    <>
      <ContentContainer>
        <div className="flex flex-col-reverse justify-center md:flex-row"
          style={{
          }}
        >
          <div
            className="w-full flex h-[700px]"
            style={{
              willChange: "transform",
              overflow: "auto"
            }}
          >
            <iframe
              loading="lazy"
              src="https://drive.google.com/file/d/1W24n-PLNisvRsJpdzuIDP_fW8ogng96l/preview"
              className="w-full"
            >
            </iframe>
          </div>
          <div className="flex flex-row justify-center gap-3 p-4 md:flex-col">
            <a
              href="https://drive.google.com/file/d/1W24n-PLNisvRsJpdzuIDP_fW8ogng96l/view?usp=sharing"
              target="_blank">
              <FaFileDownload size={35} color="#FFC612" />
            </a>
          </div>
        </div>
      </ContentContainer >
    </>
  )
}

export default Cv