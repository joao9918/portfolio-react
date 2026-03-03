"use client";
import Image from "next/image";
import LinkFooter from "./LinkFooter";
import { scrollToAbout } from "../../utils/ScrollToAbout";

type Dictionary = {
  projects: string;
  curriculum: string;
  LinkedIn: string;
  contact: string;
};

type FooterProps = {
  // 2. Use o tipo que você criou em vez de ReactNode
  dict: Dictionary;
};

export default function Footer({ dict }: FooterProps) {
  return (
    <>
      <svg
        viewBox="0 0 1441 293"
        className="w-full h-auto hidden lg:block relative top-1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#a)"
          d="M285 84C216 2 157-18 0 15l1 277h1440v-48c-108-87-182-93-330-51-112 21-190 12-363-52-94-39-149-21-248 38-76 28-121 20-215-95"
        />
        <path d="M1 20 L1 292" stroke="#8b2ef5" strokeWidth="2" />
        <defs>
          <linearGradient
            id="a"
            x1="0"
            x2="1441"
            y1="146"
            y2="140"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8b2ef5" />
            <stop offset="1" stopColor="#0b0f1a" />
          </linearGradient>
        </defs>
      </svg>

      <footer
        className="flex flex-col justify-between relative w-screen h-screen p-8 bg-[linear-gradient(90deg,#8B2EF5_0%,#0B0F1A_100%)]"
        id="footer"
      >
        <div>
          <Image
            className="cursor-pointer hover:brightness-90"
            onClick={() => scrollToAbout("hero")}
            src="/JS.png"
            alt="JS Image"
            width={250}
            height={250}
          />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col mb-8 ">
            <span className="">ABOUT</span>
            <LinkFooter
              title={dict.projects}
              onClick={() => scrollToAbout("projects")}
            />
            <LinkFooter title={dict.curriculum} />
          </div>
          <div className="flex flex-col mb-8 lg:col-start-3">
            <span>INFO</span>
            <LinkFooter
              href="https://wa.me/5519989331359?text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20me%20conectar%20para%20conversarmos%20sobre%20tecnologia%20e%20desenvolvimento."
              title={dict.contact}
              target="_blank"
            />
            <LinkFooter
              href="https://www.linkedin.com/in/joaogabriel11/"
              title={dict.LinkedIn}
              target="_blank"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 pb-8">
          <p className="col-span-2 font-black">
            JS - © {new Date().getFullYear()}
          </p>
          <a
            className="font-black hover:text-white/50"
            href="https://github.com/joao9918"
            target="_blank"
          >
            GITHUB
          </a>
        </div>
      </footer>
    </>
  );
}
