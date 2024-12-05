'use client'

import { AccordionItemProps } from '@homepage/_FAQSection/types'
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded'
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded'
import { useState } from 'react'

export const AccordionItem = ({ answer, question, id }: AccordionItemProps) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
    return (
        <div className='py-2'>
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className='flex w-full justify-between rounded-lg border-b-[3px] border-b-light-violet bg-white px-10 py-6'
            >
                <span className='text-2xl'>{question}</span>
                {accordionOpen ? (
                    <span className='text-dark-blue'>
                        <KeyboardArrowUpRoundedIcon fontSize='large' />
                    </span>
                ) : (
                    <span className='text-dark-blue'>
                        <KeyboardArrowDownRoundedIcon fontSize='large' />
                    </span>
                )}
            </button>
            <div
                className={`grid overflow-hidden text-sm transition-all duration-300 ease-in-out ${
                    accordionOpen
                        ? 'grid-rows-[1fr] p-7 opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className='overflow-hidden text-lg'>{answer}</div>
            </div>
        </div>
    )
}
