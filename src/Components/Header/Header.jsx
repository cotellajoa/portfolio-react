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
    Link as ChakraLink,

  } from '@chakra-ui/react'
import { Link as ScrollLink } from 'react-scroll';
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
                    placement='left'
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size='xs'
                    >
                    <DrawerOverlay />
                    <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader fontSize={['sm', 'md']}>Portfolio Jtella</DrawerHeader>

                    <DrawerBody >
                        <p><ChakraLink as={ScrollLink} smooth={true} duration={500} to='inicio' onClick={() => { onClose(); }}>Inicio</ChakraLink></p>
                        <p><ChakraLink as={ScrollLink} smooth={true} duration={500} to='proyectos' onClick={() => { onClose(); }}>Proyectos</ChakraLink></p>
                        <p><ChakraLink as={ScrollLink} smooth={true} duration={1200} to='habilidades' onClick={() => { onClose(); }}>Habilidades</ChakraLink></p>
                        <p><ChakraLink as={ScrollLink} smooth={true} duration={800} to='sobre-mi' onClick={() => { onClose(); }}>Sobre mi</ChakraLink></p>
                        <p><ChakraLink as={ScrollLink} smooth={true} duration={1500} to='contacto' onClick={() => { onClose(); }}>Contactame</ChakraLink></p>
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
                <ChakraLink as={ScrollLink} to='inicio' smooth={true} duration={500} className='option' color='white'>Inicio</ChakraLink>
                <ChakraLink as={ScrollLink} to='proyectos' smooth={true} duration={500} className='option' color='white'>Proyectos</ChakraLink>
                <ChakraLink as={ScrollLink} to='habilidades' smooth={true} duration={1200} className='option' color='white'>Habilidades</ChakraLink>
                <ChakraLink as={ScrollLink} to='sobre-mi' smooth={true} duration={800} className='option' color='white'>Sobre mi</ChakraLink>
                <ChakraLink as={ScrollLink} to='contacto' smooth={true} duration={1500} className='option' color='white'>Contactame</ChakraLink>
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