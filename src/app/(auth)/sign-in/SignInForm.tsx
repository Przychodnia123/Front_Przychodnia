"use client";
import { Input } from "@utilities/Input";
import { SignInValidationSchema } from "@auth/sign-in/signInValidationSchema";
import { Button } from "@utilities/Button";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type SignInFormValues = z.infer<typeof SignInValidationSchema>;

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormValues>({ resolver: zodResolver(SignInValidationSchema) });

  const onSubmit: SubmitHandler<SignInFormValues> = (values) => {
    // TODO: Handle form submission, e.g., send data to an API
  }

  return (
        <form onSubmit={handleSubmit(onSubmit)} className="py-10 space-y-5 w-full h-full tablet:h-auto flex flex-col">    
          <Input
            type="email"
            label="Adres Email"
            placeholder="example@example.com"
            id="email"
            {...register('email')}
                error={errors.email}
          />       
          <Input
            type="password"
            label="Hasło"
            placeholder="********"
            id="password"
            {...register('password')}
                error={errors.password}
          />           
          <Button textColor="white" bg="dark-blue" text="Zarejestruj się" type="submit" />
        </form>
  );
};