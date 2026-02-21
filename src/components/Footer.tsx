import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import LinkFooter from "./LinkFooter";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-between relative w-screen h-screen p-8 bg-[linear-gradient(90deg,#8B2EF5_0%,#0B0F1A_100%)]">
      <div>
        <Image src="/JS.png" alt="JS Image" width={250} height={250} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="flex flex-col mb-8 col-span-1">
          <span className="">ABOUT</span>
          <LinkFooter title="Product" />
          <LinkFooter title="Careers" />
        </div>
        <div className="flex flex-col mb-8 col-start-3">
          <span>INFO</span>
          <LinkFooter title="Contact us" />
          <LinkFooter title="Introducing Mesh" />
        </div>
      </div>
      <div className="grid grid-cols-4 pb-8">
        <p className="col-span-2 font-black">
          JS - © {new Date().getFullYear()}
        </p>
        <a className="font-black" href="">
          LINKEDIN
        </a>
      </div>
    </footer>
  );
}
