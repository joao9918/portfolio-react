"use client";
import Image from "next/image";
import LinkFooter from "./LinkFooter";
import gsap from "gsap";
import { useEffect } from "react";
import { scrollToAbout } from "../utils/ScrollToAbout";

type Dictionary = {
  projects: string;
  curriculum: string;
  LinkedIn: string;
  contact: string;
  contactULR: string;
  CurriculumURL: string;
};

type FooterProps = {
  dict: Dictionary;
};

export default function Footer({ dict }: FooterProps) {
  useEffect(() => {
    gsap.to(".wavePath", {
      duration: 4,
      attr: {
        d: "M0,32L26.7,69.3C53.3,107,107,181,160,192C213.3,203,267,149,320,160C373.3,171,427,245,480,272C533.3,299,587,277,640,245.3C693.3,213,747,171,800,144C853.3,117,907,107,960,106.7C1013.3,107,1067,117,1120,112C1173.3,107,1227,85,1280,74.7C1333.3,64,1387,64,1413,64L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z",
      },
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);
  return (
    <>
      <svg
        viewBox="10 0 1441 293"
        className="w-full h-auto hidden lg:block relative top-1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="wavePath"
          fill="url(#a)"
          d="M0,64L26.7,74.7C53.3,85,107,107,160,128C213.3,149,267,171,320,160C373.3,149,427,107,480,74.7C533.3,43,587,21,640,37.3C693.3,53,747,107,800,128C853.3,149,907,139,960,149.3C1013.3,160,1067,192,1120,176C1173.3,160,1227,96,1280,64C1333.3,32,1387,32,1413,32L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        />
        <path d="M1 20 L1 292" />
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
          <Image src="/JS.png" alt="JS Image" width={250} height={250} />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-0">
          <div className="flex flex-col mb-8 ">
            <span className="">ABOUT</span>
            <LinkFooter
              title={dict.projects}
              onClick={() => scrollToAbout("projects")}
            />
            <LinkFooter
              href={dict.CurriculumURL}
              target="_blank"
              title={dict.curriculum}
            />
          </div>
          <div className="flex flex-col mb-8 lg:col-start-3">
            <span>INFO</span>
            <LinkFooter
              href={dict.contactULR}
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
