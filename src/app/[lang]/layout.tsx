import { Poppins } from "next/font/google";
import "@/app/globals.css";
import ScrollSmootherComponent from "@/components/gsap/ScrollSmootherComponent";
import SmoothScroll from "@/components/gsap/SmoothScroll";
import { Metadata } from "next";
import { getDictionary } from "@/dictionaries/get-dictionaries";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const lang = resolvedParams.lang === "en" ? "en" : "pt";

  const dict = await getDictionary(lang);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body className={poppins.variable} suppressHydrationWarning={true}>
        <ScrollSmootherComponent>
          <SmoothScroll>{children}</SmoothScroll>
        </ScrollSmootherComponent>
      </body>
    </html>
  );
}
