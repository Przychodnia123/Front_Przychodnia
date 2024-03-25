"use client";

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useState } from "react";

export type AccordionItemProps = {
  id: string;
  question: string;
  answer: string;
};

export const AccordionItem = ({ answer, question, id }: AccordionItemProps) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full py-6 px-10 bg-white border-b-[3px] border-b-light-violet  rounded-lg "
      >
        <span className="text-2xl">{question}</span>
        {accordionOpen ? (
          <span>
            <KeyboardArrowUpRoundedIcon
              fontSize="large"
              sx={{ color: "#25305E" }}
            />
          </span>
        ) : (
          <span>
            <KeyboardArrowDownRoundedIcon
              fontSize="large"
              sx={{ color: "#25305E" }}
            />
          </span>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 p-7"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={`overflow-hidden text-lg`}>{answer}</div>
      </div>
    </div>
  );
};
