import ContentContainer from "@/app/components/ContentContainer"
import Project from "@/app/components/experience/Project"
import projectData from '../../data/projectsData'

const page = () => {
  return (
    <ContentContainer>
      <Project data={projectData.experience} title={"Experience"} />
      <Project data={projectData.personal} title={"Personal Projects"} />
      <Project data={projectData.other} title={"Other Relevant Work Experience"} />
    </ContentContainer>
  )
}

export default page