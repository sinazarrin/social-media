import React from 'react';
import Input from "@/components/Form/Input";
import { Box, useMediaQuery } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/validation/validationSchema';
import { useTheme } from '@emotion/react';
import Button from '@/components/Form/Button';
import { RegisterContainer } from './styled';

interface FormData {
  firstName: string;
  lastName: string,
  location: string,
  occupation: string,
  email: string,
  picture: string,
  password: string,
  confirmPassword: string,
}

const Register: React.FC = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(registerSchema), defaultValues: {
      firstName: '',
      lastName: '',
      location: '',
      occupation: '',
      email: '',
      picture: '',
      password: '',
      confirmPassword: '',
    }
  });

  const handleRegister: SubmitHandler<FormData> = async (data) => {
    console.log(data);

  };

  return (
    <RegisterContainer>
      <Box width={isNonMobileScreens ? "50%" : "93%"}  >
        <form onSubmit={handleSubmit(handleRegister)}>
          <Box
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <Input
              name="firstName"
              control={control} 
              label="firstName"
              sx={{ gridColumn: "span 2" }} />
            <Input
              name="lastName"
              control={control}
              label="lastName"
              sx={{ gridColumn: "span 2" }} />
            <Input
              name="location"
              control={control}
              label="location"
              sx={{ gridColumn: "span 4" }} />
            <Input
              name="occupation"
              control={control}
              label="occupation"
              sx={{ gridColumn: "span 4" }} />
            <Input
              name="email"
              control={control}
              label="email"
              sx={{ gridColumn: "span 4" }} />
            <Input
              name="picture"
              control={control}
              label="picture"
              sx={{ gridColumn: "span 4" }} />
            <Input
              name="password"
              control={control}
              label="password"
              type="password"
              sx={{ gridColumn: "span 4" }} />
            <Input
              name="confirmPassword"
              control={control}
              label="confirmPassword"
              type="password"
              sx={{ gridColumn: "span 4" }} />
            <Button  fullWidth type="submit">REGISTER</Button>
          </Box>
        </form>
      </Box>
    </RegisterContainer>
  );
};

export default Register;
