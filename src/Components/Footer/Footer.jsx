import { 
    Box,
    Container,
    Stack,
    Text,

} from '@chakra-ui/react'
import './Footer.css'

const Footer = () => {

    return (
        <Box className='bg-footer'>
            <Container
                as={Stack}
                maxW={'6xl'}
                py={4}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Box>
                    <a className="logo">Jtella<span color='#04D9C3'>.</span></a>
                </Box>
                <Text fontSize={['xs', 'sm', 'md']}>© Desarrollado por jtella.dev</Text>
            </Container>
        </Box>
    )
}

export default Footer