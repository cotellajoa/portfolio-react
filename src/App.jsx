import React from 'react'
import './App.css'
import Hero from './pages/Hero/Hero'
import First from './pages/First/First'
import { Box } from '@chakra-ui/react'
import Bio from './pages/Bio/Bio'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <Box>
      <Hero />
      <First />
      <Bio />
      <Skills />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App
