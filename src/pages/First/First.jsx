import React from "react";
import "./First.css";
import { 
    Flex,
    Card,
    CardHeader,
    CardBody,
    Box,
    Heading,
    Image,
 } from "@chakra-ui/react";


const First = () => {
    return (
        <Box as="section" className="background-f">
            <Heading size='xs' color='gray' pt='3rem' textAlign='center'>PORTFOLIO</Heading>
            <Heading size='xl' color='white' textAlign='center' mt='1rem' mb='2rem'><span>Proyectos</span> Destacados</Heading>
            <Flex backgroundColor='blackAlpha' spacing='40px' padding='1rem' flexWrap='wrap' justifyContent='center' gap='1.5rem'>
                <Card backgroundColor='blackAlpha' border='1px' borderColor='gray.400' width={{base: '260px', sm:'320px', md:'350px', lg:'420px'}}>
                    <CardHeader mb='0px'>
                        <Heading size={['xs','sm', 'md']} color='white' textAlign='center'> Página para empresa</Heading>
                    </CardHeader>
                    <CardBody mt='0'>
                        <Image src="project1.png" alt="Proyecto 1" border='2px' borderColor='gray.400' height={['180px','200px','245px']}></Image>
                    </CardBody>
                </Card>

                <Card backgroundColor='blackAlpha' border='1px' borderColor='gray.400' width={{base: '260px', sm:'320px', md:'350px', lg:'420px'}}>
                    <CardHeader mb='0px'>
                        <Heading size={['xs','sm', 'md']} color='white' textAlign='center'> Clon de Trello</Heading>
                    </CardHeader>
                    <CardBody mt='0'>
                        <Image src="project2.png" alt="Proyecto 1" border='2px' borderColor='gray.400' height={['180px','200px','245px']}></Image>
                    </CardBody>
                </Card>

                <Card backgroundColor='blackAlpha' border='1px' borderColor='gray.400' width={{base: '260px', sm:'320px', md:'350px', lg:'420px'}}>
                    <CardHeader mb='0px'>
                        <Heading size={['xs','sm', 'md']} color='white' textAlign='center'> Famoso juego "Uno"</Heading>
                    </CardHeader>
                    <CardBody mt='0'>
                        <Image src="project3.png" alt="Proyecto 1" border='2px' borderColor='gray.400' height={['180px','200px','245px']}></Image>
                    </CardBody>
                </Card>

                <Card backgroundColor='blackAlpha' border='1px' borderColor='gray.400' width={{base: '260px', sm:'320px', md:'350px', lg:'420px'}}>
                    <CardHeader mb='0px'>
                        <Heading size={['xs','sm', 'md']} color='white' textAlign='center'> Página para E-commerce</Heading>
                    </CardHeader>
                    <CardBody mt='0'>
                        <Image src="project4.png" alt="Proyecto 1" border='2px' borderColor='gray.400' height={['180px','200px','245px']}></Image>
                    </CardBody>
                </Card>

                <Card backgroundColor='blackAlpha' border='1px' borderColor='gray.400' width={{base: '260px', sm:'320px', md:'350px', lg:'420px'}}>
                    <CardHeader mb='0px'>
                        <Heading size={['xs','sm', 'md']} color='white' textAlign='center'> Clon de Twitter</Heading>
                    </CardHeader>
                    <CardBody mt='0'>
                        <Image src="project5.png" alt="Proyecto 1" border='2px' borderColor='gray.400' height={['180px','200px','245px']}></Image>
                    </CardBody>
                </Card>

                <Card backgroundColor='blackAlpha' border='1px' borderColor='gray.400' width={{base: '260px', sm:'320px', md:'350px', lg:'420px'}}>
                    <CardHeader mb='0px'>
                        <Heading size={['xs','sm', 'md']} color='white' textAlign='center'> Content Management System</Heading>
                    </CardHeader>
                    <CardBody mt='0'>
                        <Image src="project6.png" alt="Proyecto 1" border='2px' borderColor='gray.400' height={['180px','200px','245px']}></Image>
                    </CardBody>
                </Card>
            </Flex>
        </Box>
    )
}

export default First