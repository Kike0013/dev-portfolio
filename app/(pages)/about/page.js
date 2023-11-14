import ContentContainer from "@/app/components/ContentContainer"
import QuickContact from "@/app/components/aboutMe/QuickContact"
import Skills from "@/app/components/aboutMe/Skills"
import ProfilePicture from "@/app/components/mainCard/ProfilePicture"
import Link from "next/link"

const About = () => {
    return (
        <ContentContainer>
            <div className="
                sm:flex
            ">
                <div className="
                    flex
                    pb-5
                    
                    sm:flex-col
                    sm:items-center
                ">
                    <div className="
                        min-w-[180px]
                        ps-4
                        flex
                        flex-col
                        items-center
                        
                        sm:min-w-[200px]
                        sm:ps-0
                        
                        lg:min-w-[250px]
                        ">
                        <ProfilePicture />
                        <QuickContact />
                    </div>
                    <div><Skills /></div>
                </div>
                <div>
                    <div className="px-6 pb-6 h-96 overflow-auto 
                    
                    sm:h-full
                    sm:pt-6

                    lg:text-xl

                    2xl:text-2xl
                    ">
                        <h1 className="font-semibold sm:text-xl lg:text-3xl">Rafael Enrique Mella García</h1>
                        <br />
                        <p>I am a person who has always loved technology. From playing video games and messing around with toy computers as a kid, to pursuing becoming a computer engineer in college and going into software development.</p>
                        <br />
                        <p>Now I work in frontend development, I like to turn ideas and designs into experiences and interactions that bring satisfaction to the user.</p>
                        <br />
                        <p>Additionally, I explore and use backend technologies, data oriented languages and database systems to enrich my knowledge and skills as a developer.</p>
                        <br />
                        <p>For any information, I will be happy to assist.
                            Just go to my <Link href="/contact" className="text-[#4EC9B0]"><u>contact section</u></Link> or email me at <a href="mailto:kike0013pro@gmail.com" className="text-[#4EC9B0]"><u>kike0013pro@gmail.com</u></a><br/>
                            You can also check <Link href="/experience" className="text-[#4EC9B0]"><u>my projects</u></Link> or <Link href="/cv" className="text-[#4EC9B0]"><u>my cv</u></Link>.</p>
                    </div>
                </div>
            </div>
        </ContentContainer>
    )
}

export default About