import { useState } from "react";
interface ExpandableBoxProps {
  title: string;
  content: string;
}
const ExpandableBox = ({ title, content }: ExpandableBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full rounded-lg border-b-2 border-[#D7D7D7] overflow-hidden px-2 py-5">
      <div
        className="flex justify-between items-center px-4 py-3 cursor-pointer"
        onClick={handleClick}
      >
        <p
          className={`${
            isOpen ? "text-[#009961]" : ""
          } 2xl:text-[1.4rem] text-md font-sans font-semibold`}
        >
          {title}
        </p>
        <svg
          className={`${
            isOpen ? "transform rotate-45" : ""
          } w-6 h-6 text-gray-600`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M9 5l7 7-7 7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="px-2 py-6 prose text-[1rem] 2xl:text-[1.2rem] text-[#617275]">
          {content}
        </div>
      )}
    </div>
  );
};

export default ExpandableBox;
