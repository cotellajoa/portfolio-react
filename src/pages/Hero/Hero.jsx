import React from 'react';
import {
        Box,
        Flex,
        Heading,
        IconButton,
    } from '@chakra-ui/react';
import Header from '../../Components/Header/Header';
import './Hero.css';
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Hero = () => {
    const githubClick = () => {
        window.open('https://github.com/cotellajoa', '_blank');
    };

    const gmailClick = () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=cotellajoaquin@gmail.com&su=PORTFOLIO&body=Me interesa trabajar contigo!', '_blank')
    };

    const linkdnClick = () => {
        window.open('https://www.linkedin.com/in/joaquin-cotella-94582121b/', '_blank');
    };

    const xClick = () => {
        window.open('https://x.com/', '_blank');
    };
        
    return (
        <Box as='section' backgroundImage='/bg.jpg'>
            <Header />
            <Box h="400px" display='flex' alignItems='center' textAlign='center' flexDirection='column' mt='6rem' className='font'>
                <Heading as='h1' className='font' noOfLines={1} color='white'>Hola, soy <span>Joaquin Cotella</span></Heading>
                <Heading as='h2' noOfLines={{base: '4', sm: '3'}} size={{base: 'xs', sm: 'xs', md: 'md'}} mt='1rem' color='white'>Un experimentado <span>Desarrollador Fullstack</span> transformando ideas en <br />
                impresionantes experiencias digitales. ¡Creemos algo increíble!</Heading>
                <Flex mt='2rem' columnGap='1rem' alignItems='center'>
                    <IconButton
                        isRound={true}
                        variant='solid'
                        colorScheme='grey'
                        aria-label='Done'
                        fontSize='35px'
                        icon={<FaGithub />}
                        onClick={githubClick}
                        _hover={{
                            color: 'teal.300'
                            }
                        }
                    />
                    <IconButton
                        isRound={true}
                        variant='solid'
                        colorScheme='grey'
                        aria-label='Done'
                        fontSize='35px'
                        icon={<SiGmail />}
                        onClick={gmailClick}
                        _hover={{
                            color: 'teal.300'
                            }
                        }
                    />
                    <IconButton
                        isRound={true}
                        variant='solid'
                        colorScheme='grey'
                        aria-label='Done'
                        fontSize='35px'
                        icon={<FaLinkedinIn />}
                        onClick={linkdnClick}
                        _hover={{
                            color: 'teal.300'
                            }
                        }
                    />
                    <IconButton
                        isRound={true}
                        variant='solid'
                        colorScheme='grey'
                        aria-label='Done'
                        fontSize='35px'
                        icon={<FaTwitter />}
                        onClick={xClick}
                        _hover={{
                            color: 'teal.300'
                            }
                        }
                    />
                </Flex>
            </Box>
        </Box>
  );
};

export default Hero;