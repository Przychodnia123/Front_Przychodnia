import {
  AccordionItem,
  AccordionItemProps,
} from "../AccordionItem/AccordionItem";

export type AccordionMenuProps = {
  faq: AccordionItemProps[];
};

export const AccordionMenu = ({ faq }: AccordionMenuProps) => {
  return faq.map((item: AccordionItemProps) => (
    <div key={item.id} className="">
      <AccordionItem
        id={item.id}
        question={item.question}
        answer={item.answer}
      />
    </div>
  ));
};
