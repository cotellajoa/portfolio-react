import { 
    Box,
    Flex,
    Heading,
    Image,
    Text,
 } from '@chakra-ui/react'
import './Bio.css'
import React from 'react'

const Bio = () => {

    return (
        <Box className='bg-bio' as='section' pb='2rem' id='sobre-mi'>
            <Heading size='xs' color='gray' pt='3rem' textAlign='center'>MY BIO</Heading>
            <Heading size='xl' color='white' textAlign='center' mt='1rem' mb='2rem'>Sobre <span>mí</span>.</Heading>
            <Flex flexDirection={['column', 'row']} justifyContent='center' alignItems='center'>
                <Image src='/profile-am.png' alt='profile logo' w={['70%', '240px', '300px', '420px']}></Image>
                <Box p='1rem'>
                    <Text textAlign='center' fontWeight='semi-bold' noOfLines={[7, 6, 4]} fontSize={['sm', 'sm', 'lg', 'xl']} color='white'>Hola! Mi nombre es Joaquin soy un estudiante de segundo año de <span>Ingeniería en Sistemas</span>, apasionado por la tecnología y siempre buscando aprender nuevas tecnologías. </Text>
                    <Text ml='2rem' color='white' textAlign='center' fontWeight='semi-bold' fontSize='lg' display={['none', 'none', 'inline-block']}>Mi curiosidad insaciable me impulsa a explorar y entender cómo funcionan las últimas innovaciones.</Text>
                </Box>            
            </Flex>
        </Box>
    )
}

export default Bio