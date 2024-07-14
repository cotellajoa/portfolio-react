import React, { useState } from 'react';
import "./Header.css"
import {
    Box,
    Flex,
    IconButton,

  } from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

const Header = () => {

    const [isHamburger, setIsHamburger] = useState(true);

    const handleClick = () => {
        setIsHamburger(!isHamburger);
      };

    return(
        <Box as="header">
            <Flex alignItems='center' justifyContent='space-between'>
                <IconButton
                variant='outline'
                className='btn-icon'
                colorScheme='teal'
                aria-label='Toggle menu'
                icon={isHamburger ? <HamburgerIcon /> : <CloseIcon />}
                display={ {base: "inline", sm: "inline", md: "none"}}
                onClick={handleClick}
                />
                <a class="logo">Jtella<span color='#04D9C3'>.</span></a>
            </Flex>
            <Flex alignItems='center' columnGap="2rem" wrap='wrap' display={ {base: 'none', sm: 'none', md:'flex'} }>
                <a href="#inicio" id="inicio" className='option'>Inicio</a>
                <a href="#second-page" className='option'>Proyectos</a>
                <a href="#third-page" className='option'>Habilidades</a>
                <a href="#four-page" className='option'>Sobre mi</a>
                <a href="#fifth-page" className='option'>Contactame</a>
                
            </Flex>
        </Box>
    )
}

export default Header