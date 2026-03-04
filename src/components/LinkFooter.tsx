import { AnchorHTMLAttributes } from "react";
import { GoArrowUpRight } from "react-icons/go";

type LinkFooterProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  title: string;
  onClick?: () => void;
};

export default function LinkFooter({
  title,
  onClick,
  href,
  ...props
}: LinkFooterProps) {
  return (
    <a
      onClick={onClick}
      className="text-xl border-b hover:-translate-y-1 text-[#ffffff4f] border-b-[#ffffff4f] hover:text-white transition py-6 lg:text-3xl flex justify-between items-center cursor-pointer"
      href={href}
      {...props}
    >
      {title} <GoArrowUpRight />
    </a>
  );
}
