import ContentContainer from "@/app/components/ContentContainer"

const page = () => {

  return (
    <>
      <ContentContainer>
        <div className="flex justify-center"
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
          {/* <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFVg35GM28&#x2F;view?utm_content=DAFVg35GM28&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Custom link text */}
        </div>
      </ContentContainer >
    </>
  )
}

export default page