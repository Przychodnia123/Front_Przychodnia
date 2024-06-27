"use client";
import { Input } from "@utilities/Input";
import { SignUpValidationSchema } from "@auth/sign-up/signUpValidationSchema";
import { Button } from "@utilities/Button";
import { Form, Formik } from "formik";
import { ZodError, z } from "zod";

type SignUpFormValues = z.infer<typeof SignUpValidationSchema>;

export const SignUpForm = () => {
  
  const validateForm = (values: SignUpFormValues) => {
    try {
      SignUpValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };

  const handleSubmit = async (values: SignUpFormValues) => {
    try{
      console.log(values);
    } catch (error) {
      console.error('error', error)
    }
  };

  return (
    <Formik<SignUpFormValues>
      initialValues={{
        username: "",
        email: "",
        password: "",
        password2: ""
      }}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form className="py-10 space-y-5 w-full h-full tablet:h-auto flex flex-col">
          <Input
            type="text"
            label="Nazwa użytkownika"
            placeholder="Nazwa użytkownika"
            name="username"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          <Input
            type="email"
            label="Adres Email"
            placeholder="example@example.com"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Input
            type="password"
            label="Hasło"
            placeholder="********"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <Input
            type="password"
            label="Powtórz Hasło"
            placeholder="********"
            name="password2"
            id="password2"
            value={formik.values.password2}
            onChange={formik.handleChange}
          />
          <Button textColor="white" bg="dark-blue" text="Zarejestruj się" type="submit" />
        </Form>
      )}
    </Formik>
  );
};
