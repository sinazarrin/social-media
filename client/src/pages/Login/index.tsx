import React from 'react';
import Input from "@/components/Form/Input";
import { Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/validation/validationSchema';

interface FormData {
  firstName: string;
  lastName: string,
  location: string,
  occupation: string,
  image: string,
  email: string,
  password: string,
  confirmPassword: string,
}

const Login: React.FC = () => {

  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema), defaultValues: {
      firstName: '',
      lastName: '',
      location: '',
      occupation: '',
      image: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);

  };
  console.log(errors);


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input name="firstName" control={control} label="firstName" />
      <Input name="lastName" control={control} label="lastName" />
      <Input name="location" control={control} label="location" />
      <Input name="occupation" control={control} label="occupation" />
      <Input name="email" control={control} label="email" />
      <Input name="password" control={control} label="password" />
      <Input name="confirmPassword" control={control} label="confirmPassword" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Login;
