import "@/src/app/globals.css";
import { Footer } from "@/src/app/utilities/Footer";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "e-przychodnia",
  description:
    "e-przychodnia to innowacyjna platforma medyczna, zaprojektowana z myślą o wygodzie i bezpieczeństwie pacjentów. Dzięki niej możesz skonsultować się z lekarzem lub specjalistą zdrowia bez konieczności wychodzenia z domu. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-light-gray`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
