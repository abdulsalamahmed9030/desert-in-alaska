import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ProjectCTA from '@/components/ProjectCTA'
import Projects from '@/components/projects'
import TopBar from '@/components/TopBar'
import React from 'react'

const page = () => {
  return (
    <>
    <TopBar />
     <Header /> 
     <Projects />
     <ProjectCTA />
     <Footer />
   </>
  )
}

export default page
