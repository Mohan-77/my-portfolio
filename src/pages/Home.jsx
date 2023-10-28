import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
    </div>
  )
}

export default Home