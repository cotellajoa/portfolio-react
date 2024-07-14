import { useState } from 'react'
import './App.css'
import { Box } from '@chakra-ui/react'
import Header from './Components/Header/Header'

function App() {

  return (
    <Box as='section' bgImage='bg.jpg'>
      <Header/>
    </Box>
  )
}

export default App
