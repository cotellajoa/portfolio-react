import './Form.css'
import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const Form = () => {
    // Se usó el paquete React Hook Form para facilitar las validaciones
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const toast = useToast();

    const onSubmit = (data) => {
        toast({
        title: 'Formulario enviado',
        status: 'success',
        duration: '700',
        isClosable: true,
        });
        reset(); // Limpia los campos del formulario
    };

    return (
        <Box maxW="md" mx="auto" mt="10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.fullName}>
                <FormLabel htmlFor="fullName" color='white' fontWeight='semi-bold'>Nombre completo</FormLabel>
                <Input
                    color='white' 
                    fontWeight='semi-bold'
                    id="fullName"
                    placeholder="Nombre completo"
                    {...register('fullName', { required: 'Este campo es requerido' })}
                />
                {errors.fullName && <Box color="red.500">{errors.fullName.message}</Box>}
                </FormControl>

                <FormControl mt="4" isInvalid={errors.email}>
                <FormLabel htmlFor="email" color='white' fontWeight='semi-bold'>Email</FormLabel>
                <Input
                    color='white'
                    fontWeight='semi-bold'
                    id="email"
                    type="email"
                    placeholder="Email"
                    {...register('email', {
                    required: 'Este campo es requerido',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Email inválido',
                    },
                    })}
                />
                {errors.email && <Box color="red.500">{errors.email.message}</Box>}
                </FormControl>

                <FormControl mt="4" isInvalid={errors.message}>
                <FormLabel htmlFor="message" color='white' fontWeight='semi-bold'>Mensaje</FormLabel>
                <Textarea
                    color='white'
                    fontWeight='semi-bold'
                    id="message"
                    placeholder="Mensaje"
                    {...register('message', { required: 'Este campo es requerido' })}
                />
                {errors.message && <Box color="red.500">{errors.message.message}</Box>}
                </FormControl>

                <Button mt="4" colorScheme="blue" type="submit">
                Enviar
                </Button>
            </form>
        </Box>
    )
}

export default Form