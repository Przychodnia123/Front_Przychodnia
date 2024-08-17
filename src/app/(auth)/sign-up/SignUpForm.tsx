"use client";
import { Input } from "@utilities/Input";
import { SignUpValidationSchema } from "@auth/sign-up/signUpValidationSchema";
import { Button } from "@utilities/Button";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type SignUpFormValues = z.infer<typeof SignUpValidationSchema>;

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpFormValues>({ resolver: zodResolver(SignUpValidationSchema) });

  const onSubmit: SubmitHandler<SignUpFormValues> = (values) => {
    // TODO: Handle form submission, e.g., send data to an API
  }

  return (
        <form onSubmit={handleSubmit(onSubmit)} className="py-10 space-y-5 w-full h-full tablet:h-auto flex flex-col">
          <Input
            type="text"
            label="Nazwa użytkownika"
            placeholder="Nazwa użytkownika"
            id="username"
            {...register('username')}
            error={errors.username}
          />        
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
          <Input
            type="password"
            label="Powtórz Hasło"
            placeholder="********"
            id="password2"
            {...register('password2')}
            error={errors.password2}
          />      
          <Button textColor="white" bg="dark-blue" text="Zarejestruj się" type="submit" />
        </form>
  );
};
