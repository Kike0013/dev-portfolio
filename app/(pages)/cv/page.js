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
            className="w-full md:w-3/4 xl:w-2/5 flex"
            style={{
              height: "700px",
              boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
              borderRadius: "8px",
              willChange: "transform",
              overflow: "auto"
            }}
          >
            <iframe
              loading="lazy"
              src="https://docs.google.com/document/d/e/2PACX-1vSSFDdqbw0jVqytNME4WgwbEYw8YnhpPeLVbfqbhjuK9LjKVfMHlG9EfDTJQhW5B4mToab9HA_qRNr1/pub?embedded=true"
              className="w-full"
            >
            </iframe>
          </div>
          <div className="flex flex-row justify-center gap-3 p-4 md:flex-col">
            <a
              href="https://docs.google.com/document/d/1MPYlGkIhpV-BmMw8yrWCr9BR-5FAPPgBF5y0hEfhBm8/edit?usp=sharing"
              target="_blank"
              rel="noopener">
              <MdOutlineOpenInNew size={40} color="#FFC612" />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1_0b8fcoQEnJFNJTAKJLNK9PDwZaO0SPo?usp=sharing"
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