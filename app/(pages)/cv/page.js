import ContentContainer from "@/app/components/ContentContainer"
import { MdOutlineOpenInNew } from 'react-icons/md'
import { FaFileDownload } from 'react-icons/fa'

const Cv = () => {

  return (
    <>
      <ContentContainer>
        <div className="flex flex-col-reverse justify-center sm:flex-row"
          style={{
          }}
        >
          <div
            className="
            w-full

            md:w-3/4

            lg:w-2/4

            xl:w-2/6
          "
            style={{
              display: "flex",
              height: "700px",
              boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
              borderRadius: "8px",
              willChange: "transform",
              overflow: "auto"
            }}
          >
            <iframe loading="lazy"
              className="w-full"
              style={{
                height: "700px"
              }}
              src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFVg35GM28&#x2F;view?embed">
            </iframe>
          </div>
          <div className="flex flex-row justify-center gap-3 p-4 sm:flex-col">
            <a
              href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFVg35GM28&#x2F;view?utm_content=DAFVg35GM28&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
              target="_blank"
              rel="noopener">
              <MdOutlineOpenInNew size={70} color="#FFC612" />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1_0b8fcoQEnJFNJTAKJLNK9PDwZaO0SPo?usp=sharing"
              target="_blank">
              <FaFileDownload size={70} color="#FFC612" />
            </a>
          </div>
        </div>
      </ContentContainer >
    </>
  )
}

export default Cv