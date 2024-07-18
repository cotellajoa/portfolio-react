import { 
    Box,
    Heading,
    Flex,
    SimpleGrid,

 } from '@chakra-ui/react'

import { FaReact } from "react-icons/fa6";
import { FaSass, FaBootstrap, FaNodeJs, FaLinux } from "react-icons/fa";
import { SiChakraui, SiExpress, SiMongodb, SiPostman} from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import './Skills.css'
import React from 'react'

const Skills = () => {

    return (
        <Box className='bg-skills' as='section' pb='2rem'>
            <Heading size='xs' color='gray' pt='3rem' textAlign='center'>SKILLS</Heading>
            <Heading size='xl' color='white' mt='1rem' textAlign='center' mb='2rem'>Habilidades <span>técnicas</span>.</Heading>
            <Flex flexDirection={["column", "row"]} justifyContent={['center', 'space-around']} p='1rem' mt='2rem' gap='1rem'>
                <Box>
                    <Heading size='md' color='gray.500  '>Frontend</Heading>
                </Box>
                <Flex flexWrap='wrap' flexDirection={["column", "row"]} gap='10px' alignItems='center'>
                    <FaReact color='teal' size='60px'/>
                    <FaSass color='teal' size='60px' />
                    <RiJavascriptLine color='teal' size='60px' />
                    <SiChakraui color='teal' size='60px' /> 
                    <FaBootstrap color='teal' size='60px' />
                </Flex>
            </Flex>
            <Flex flexDirection={["column", "row"]} justifyContent={['center', 'space-around']} p='1rem' mt='2rem' gap='1rem'>
                <Box>
                    <Heading size='md' color='gray.500'>Backend</Heading>
                </Box>
                <Flex flexWrap='wrap' flexDirection={["column", "row"]} gap='10px' alignItems='center'>
                    <FaNodeJs color='teal' size='60px'/>
                    <SiExpress color='teal' size='60px' />
                    <SiMongodb color='teal' size='60px' />
                </Flex>
            </Flex>
            <Flex flexDirection={["column", "row"]} justifyContent={['center', 'space-around']} p='1rem' mt='2rem' gap='1rem'>
                <Box>
                    <Heading size='md' color='gray.500'>Otros</Heading>
                </Box>
                <Flex flexWrap='wrap' flexDirection={["column", "row"]} gap='10px' alignItems='center'>
                    <FaLinux color='teal' size='60px'/>
                    <SiPostman color='teal' size='60px' />
                </Flex>
            </Flex>
        </Box>
    )
}

export default Skills