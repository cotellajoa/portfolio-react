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
import Form from '../Form/Form';

const Contacto = () => {

    return (
        <SimpleGrid columns={[1, 1, 2]} className='bg-contacto' as='section'>
            <Box as='section' p={['1rem', '2rem']}>
                <Heading textAlign='center' color='white' fontSize={['xs', 'sm', 'md']}>Tienes una idea de un proyecto?</Heading>
                <Heading textAlign='center' color='teal' fontSize={['xs', 'sm', 'md']}>Vamos a hablarlo!</Heading>
                <Flex gap='1.5rem' flexDirection='column' justifyContent='center' alignItems='center' p='1rem'>
                    <Flex gap='1rem' mt='2rem'>
                        <BsFillTelephoneFill color='white'/>
                        <Text color='teal' fontSize={['xs', 'lg']}>+54 3584284762</Text>
                    </Flex>
                    <Flex gap='1rem' alignItems='center' flexDirection={['column', 'row']}>
                        <CiMail color='white'/>
                        <Text color='teal' fontSize={['xs', 'lg']}>cotellajoaquin@gmail.com</Text>
                    </Flex>
                    <Flex gap='1rem' flexDirection={['column', 'row']} alignItems='center'>
                        <CiLocationOn color='white'/>
                        <Text color='white' fontSize={['xs', 'lg']}>Córdoba, Córdoba , Argentina</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box as='section' p='1rem'>
                <Form />
            </Box>
        </SimpleGrid>
    )
}

export default Contacto