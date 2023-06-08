import ContentContainer from "@/app/components/ContentContainer"
import Project from "@/app/components/experience/Project"
import projectData from '../../data/projectsData'

const page = () => {
  return (
    <ContentContainer>
      <h1 className="text-2xl ps-2 mb-2">Experience</h1>
      <div className="flex gap-6 ps-2 mb-5">
        <Project data={projectData.experience}/>
      </div>
      <h1 className="text-2xl ps-2 mb-2">Personal Projects</h1>
      <div className="flex gap-6 ps-2 mb-5">
        <Project data={projectData.personal} />
      </div>
      <h1 className="text-2xl ps-2 mb-2">Other Relevant Work Experience</h1>
      <div className="flex gap-6 ps-2 mb-5">
        <Project data={projectData.other}/>
      </div>
    </ContentContainer>
  )
}

export default page