import { 
    Box,
    Flex,
    Heading,
    SimpleGrid,
    Text,
} from '@chakra-ui/react'
import './Contacto.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail, CiLocationOn } from "react-icons/ci";

const Contacto = () => {

    return (
        <SimpleGrid columns={[1, 1, 2]} className='bg-contacto' as='section'>
            <Box>
                <Heading textAlign='center' color='white' fontSize={['xs', 'sm', 'md']}>Tienes una idea de un proyecto?</Heading>
                <Heading textAlign='center' color='teal' fontSize={['xs', 'sm', 'md']}>Vamos a hablarlo!</Heading>
                <Flex flexDirection='column' justifyContent='space-around'>
                    <Flex gap='1rem'>
                        <BsFillTelephoneFill color='white'/>
                        <Text color='teal' fontSize='sm'>+54 3584284762</Text>
                    </Flex>
                    <Flex gap='1rem'>
                        <CiMail color='white'/>
                        <Text color='teal' fontSize='sm'>cotellajoaquin@gmail.com</Text>
                    </Flex>
                    <Flex gap='1rem'>
                        <CiLocationOn color='white'/>
                        <Text color='white' fontSize='sm'>cotellajoaquin@gmail.com</Text>
                    </Flex>
                </Flex>
            </Box>
        </SimpleGrid>
    )
}

export default Contacto