import { Poppins } from "next/font/google";
import "@/app/globals.css";
import ScrollSmootherComponent from "@/components/gsap/ScrollSmootherComponent";
import SmoothScroll from "@/components/gsap/SmoothScroll";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "João Santos | Desenvolvedor Full Stack",
  description: "Portfólio de João Santos - Projetos, tecnologias e contato.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable} suppressHydrationWarning={true}>
        <ScrollSmootherComponent>
          <SmoothScroll>{children}</SmoothScroll>
        </ScrollSmootherComponent>
      </body>
    </html>
  );
}
