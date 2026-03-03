import { Poppins } from "next/font/google";
import "@/app/globals.css";
import ScrollSmootherComponent from "@/components/gsap/ScrollSmootherComponent";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable}>
        <ScrollSmootherComponent>{children}</ScrollSmootherComponent>
      </body>
    </html>
  );
}
