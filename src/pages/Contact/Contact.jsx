import React from 'react'
import './Contact.css'
import { Box, Container } from '@chakra-ui/react'
import Contacto from '../../Components/Contacto/Contacto'

const Contact = () => {

    return (
        <Box as='section' bgImage="url('bg-contact.jpg')" bgRepeat='no-repeat' backgroundSize='cover' p='2rem'>
            <Contacto />
        </Box>
    )
}

export default Contact