import React from 'react'
import Header  from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/about/about'
import Experience from './component/experience/experience'
import Services from './component/services/services'
import Portifolio from './component/portifolio/portifolio'
import Testimonials from './component/testimonials/testimonials'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'



const App = () => {
  return(
  <>
  <Header/>
  <Nav/>
  <About/>
  <Experience/>
  <Services/>
  <Portifolio/>
  <Testimonials/>
  <Contact/>
  <Footer/>
  
  </>
  )

}

export default App
