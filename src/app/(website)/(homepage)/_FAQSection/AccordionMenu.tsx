import { AccordionItem } from '@/homepage/_FAQSection/AccordionItem'
import { AccordionItemProps } from '@/homepage/_FAQSection/types'

type Props = {
  faq: AccordionItemProps[]
}

export const AccordionMenu = ({ faq }: Props) => {
  return faq.map((item: AccordionItemProps) => (
    <AccordionItem
      key={item.id}
      id={item.id}
      question={item.question}
      answer={item.answer}
    />
  ))
}
