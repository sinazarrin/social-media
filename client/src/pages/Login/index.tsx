import React from 'react'
import { LoginContainer } from './styled'
import { Box, useMediaQuery } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/validation/validationSchema';
import Input from '@/components/Form/Input';
import Button from '@/components/Form/Button';

interface FormData {
    email: string,
    password: string,
}

const Login = () => {
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const { handleSubmit, control } = useForm({
        resolver: zodResolver(LoginSchema), defaultValues: {
            email: '',
            password: '',
        }
    });

    const handleRegister: SubmitHandler<FormData> = async (data) => {
        console.log(data);

    };

    return (
        <LoginContainer>
            <Box width={isNonMobileScreens ? "50%" : "93%"}>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <Box
                        sx={{
                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                        }}
                    >
                        <Input
                            name="email"
                            control={control}
                            label="email"
                            sx={{ gridColumn: "span 4" }} />
                        <Input
                            name="password"
                            control={control}
                            label="password"
                            type="password"
                            sx={{ gridColumn: "span 4" }} />
                        <Button fullWidth type="submit">Login</Button>
                    </Box>
                </form>
            </Box>
        </LoginContainer>
    )
}

export default Login