import { ChevronRight } from "lucide-react";

const Accordion = ({ title, subTitle, children, isOpen, onClickHandler }) => {
  return (
    <div className="bg-white rounded">
      <div
        onClick={onClickHandler}
        className={`flex w-full pt-8 pb-5 px-8 border-b-2 hover:cursor-pointer items-center `}
      >
        <div>
          <p className="text-[#111111] text-lg font-semibold">{title}</p>
          <p className="text-[#111111]/50">{subTitle}</p>
        </div>

        <span
          className={`ml-auto transition-transform ease-in-out duration-400 ${
            isOpen && "rotate-90"
          }`}
        >
          <ChevronRight strokeWidth={1.5} />
        </span>
      </div>
      {isOpen && (
        <div className="pt-7 px-8 pb-8 duration-500 ease-out text-justify break-normal leading-[30px]">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
