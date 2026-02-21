import { GoArrowUpRight } from "react-icons/go";

type LinkFooterProps = {
  title: string;
};

export default function LinkFooter({ title }: LinkFooterProps) {
  return (
    <a
      className="border-b text-[#ffffff4f] border-b-[#ffffff4f] hover:text-white transition py-6 text-3xl flex justify-between items-center"
      href=""
    >
      {title} <GoArrowUpRight />
    </a>
  );
}
