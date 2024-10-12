import { SignInForm } from "@auth/sign-in/SignInForm";
import { Title } from "@utilities/Title";
import Image from "next/image";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="w-full h-auto tablet:w-3/4 laptop:w-1/2 tablet:h-auto flex flex-col gap-y-4 items-center px-5 tablet:px-16 py-10 bg-white rounded-3xl shadow-md">
      <Image src="/nav-assets/logo.png" alt="Logo" width={208} height={71} />
      <Title size="text-5xl">Zaloguj się</Title>
      <SignInForm />
      <p>Nie masz konta?<Link className="text-light-blue ml-3" href={'/sign-in'}>Zaloguj się</Link></p>
    </div>
  );
}