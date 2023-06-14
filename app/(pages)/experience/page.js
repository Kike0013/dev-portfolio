"use client"

import ContentContainer from "@/app/components/ContentContainer"
import Project from "@/app/components/experience/Project"
import projectData from '../../data/projectsData'
import ProjectDetail from "@/app/components/experience/ProjectDetail"
import { useState } from "react"
import ProjectDetailContainer from "@/app/components/experience/ProjectDetailContainer"

const Experience = () => {

  const [showDetail, setShowDetail] = useState(false)

  return (
    <>
      <ContentContainer>
        <Project data={projectData.experience} title={"Experience"} setShowDetail={setShowDetail} />
        <Project data={projectData.personal} title={"Personal Projects"} setShowDetail={setShowDetail} />
        <Project data={projectData.other} title={"Other Relevant Work Experience"} setShowDetail={setShowDetail} />
      </ContentContainer>
      {showDetail
        && <ProjectDetailContainer setShowDetail={setShowDetail}>
          <ProjectDetail data={projectData.experience} title={"Experience"} />
          <ProjectDetail data={projectData.personal} title={"Personal Projects"} />
          <ProjectDetail data={projectData.other} title={"Other Relevant Work Experience"} />
        </ProjectDetailContainer>}
    </>
  )
}

export default Experience