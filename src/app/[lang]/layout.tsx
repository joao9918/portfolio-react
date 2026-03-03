import { Poppins } from "next/font/google";
import "@/app/globals.css";
import ScrollSmootherComponent from "@/components/gsap/ScrollSmootherComponent";
import SmoothScroll from "@/components/gsap/SmoothScroll";

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
        <ScrollSmootherComponent>
          <SmoothScroll>{children}</SmoothScroll>
        </ScrollSmootherComponent>
      </body>
    </html>
  );
}
