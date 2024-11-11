"use client";
import { Input } from "@utilities/Input";
import { SignInValidationSchema } from "@auth/sign-in/signInValidationSchema";
import { Button } from "@utilities/Button";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Label } from "@/src/utilities/Label";

type SignInFormValues = z.infer<typeof SignInValidationSchema>;

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(SignInValidationSchema),
  });

  const onSubmit: SubmitHandler<SignInFormValues> = (values) => {
    // TODO: Handle form submission, e.g., send data to an API
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="py-10 space-y-5 w-full h-full tablet:h-auto flex flex-col"
    >
      <div>
        <Label>Adres e-mail</Label>
        <Input
          type="email"
          placeholder="example@example.com"
          id="email"
          {...register("email")}
          error={errors.email}
        />
      </div>
      <div>
        <Label>Hasło</Label>
        <Input
          type="password"
          placeholder="********"
          id="password"
          {...register("password")}
          error={errors.password}
        />
      </div>
      <div className="flex justify-between">
        <label>
          <input required type="checkbox" />
          <span className="ml-2">Zapamiętaj hasło</span>
        </label>
        <Link className="text-light-blue" href="/">
          Nie pamiętasz hasła?
        </Link>
      </div>
      <Button
        textColor="white"
        bg="dark-blue"
        text="Zarejestruj się"
        type="submit"
      />
    </form>
  );
};
