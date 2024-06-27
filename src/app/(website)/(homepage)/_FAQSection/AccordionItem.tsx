"use client";

import { AccordionItemProps } from "@homepage/_FAQSection/types";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { useState } from "react";

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
          <span className="text-dark-blue">
            <KeyboardArrowUpRoundedIcon fontSize="large" />
          </span>
        ) : (
          <span className="text-dark-blue">
            <KeyboardArrowDownRoundedIcon fontSize="large" />
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
        <div className="overflow-hidden text-lg">{answer}</div>
      </div>
    </div>
  );
};
