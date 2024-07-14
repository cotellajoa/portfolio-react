import React, { useState } from 'react';
import {
    Box,
    Flex,
    IconButton,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
  } from '@chakra-ui/react'

import { HamburgerIcon } from '@chakra-ui/icons'
import "./Header.css";

const Header = () => {

    // Hook para que se abra menu responsive
    // Drawer Component
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return(
        <Box as="header">
            {/* Boton Hamburgesa */}
            <Flex alignItems='center' justifyContent='space-around' width={ ['100%', '100%', '20%']}>
                <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Toggle menu'
                icon={<HamburgerIcon />}
                display={ {base: "inline", sm: "inline", md: "none"}}
                onClick={onOpen}
                _hover={{
                    backgroundColor: 'black',
                }}
                />

                <Drawer
                    isOpen={isOpen}
                    placement='rigth'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size='xs'
                    >
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Portfolio Jtella</DrawerHeader>

                    <DrawerBody >
                        <p><a href="">Inicio</a></p>
                        <p><a href="">Proyectos</a></p>
                        <p><a href="">Habilidades</a></p>
                        <p><a href="">Sobre mi</a></p>
                        <p><a href="">Contactame</a></p>
                        <Button
                            backgroundColor='blue.400'
                            mt="2rem"
                            _hover={{
                                backgroundColor:'blue.200'
                            }}
                        ><a href="https://drive.google.com/file/d/1FBjPr6_Z7qje9DqQ0HrYkkr3Qd269Ch-/view?usp=sharing" target='__blank'>Ver CV</a></Button>
                    </DrawerBody>
                    </DrawerContent>
                </Drawer>

                <a className="logo">Jtella<span color='#04D9C3'>.</span></a>
            </Flex>
            <Flex alignItems='center' justifyContent="space-between" columnGap="2rem" wrap='wrap' display={ {base: 'none', sm: 'none', md:'flex'}}>
                <a href="#inicio" id="inicio" className='option'>Inicio</a>
                <a href="#second-page" className='option'>Proyectos</a>
                <a href="#third-page" className='option'>Habilidades</a>
                <a href="#four-page" className='option'>Sobre mi</a>
                <a href="#fifth-page" className='option'>Contactame</a>
                <Button
                    backgroundColor='blue.400'
                    _hover={{
                        backgroundColor:'blue.200'
                    }}
                ><a href="https://drive.google.com/file/d/1FBjPr6_Z7qje9DqQ0HrYkkr3Qd269Ch-/view?usp=sharing" target='__blank'>Ver CV</a></Button>
            </Flex>
        </Box>
    )
}

export default Header