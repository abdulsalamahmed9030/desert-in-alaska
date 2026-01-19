import AboutPage from '@/components/AboutPage'
import AboutUs from '@/components/AboutUs'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TopBar from '@/components/TopBar'
import React from 'react'

const page = () => {
  return (
    <>
    <TopBar />
     <Header />
     <AboutPage /> 
     <AboutUs />
     <Certifications />
     <Footer />
   </>
  )
}

export default page
