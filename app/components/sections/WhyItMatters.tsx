import React from 'react'
import Step from '../ui/Step'
import Image from 'next/image'

const highlights = [
  {
    label: '01',
    title: 'In-house betting engine',
    img: "streamline_module-puzzle-3-solid.png",
    tags: ['No order book', 'No slippage', 'Fixed odds for everyone', "Platform is the counterparty"],
  },
  {
    label: '02',
    title: 'Fast & Simple',
    img: "Vector-4.png",
    tags: ['One click bets', 'Results in minutes', 'No liquidation', 'No positions'],
  },
  {
    label: '03',
    title: 'Transparent & Fair',
    img: "Group-15.svg",
    tags: ['Prices sourced from real exchanges', 'Public result history', 'Deterministic event rules'],
  },
  {
    label: '04',
    title: 'Skill-driven',
    img: "Vector-69.svg",
    tags: ['Pattern recognition', 'Not luck — market awareness', 'Not luck — market awareness'],
  },
]

const WhyItMatters = () => {
  return (
    <section className='flex flex-col gap-10 mb-[120px]'>
      <Step text="Why it matters" />
      <p className='text-[32px] lg:text-[64px] text-[#F0F0F0] font-semibold font-schibsted tracking-[-2%] leading-[100%] lg:mb-[70px]'>
        Why this is different/<br />Trust & Edge
      </p>

      <div className='grid gap-6 md:grid-cols-4'>
        {highlights.map((item) => (
          <article key={item.label} className='dot-card flex flex-col justify-between gap-5 p-6 lg:p-8 text-left text-[#F0F0F0]'>
            <div>
              <Image
                src={`/${item.img}`}
                alt={item.title}
                width={66}
                height={66}
                className='mb-4'
              />
              <p className='mt-[67px] text-[24px] lg:text-[32px] text-[#F0F0F0] font-semibold'>
                {item.title}
              </p>
            </div>
            <ul className='flex flex-row gap-1.5 flex-wrap'>
              {item.tags.map((tag, index) => (
                <li key={index} className='text-[14px] text-[#F0F0F0] border border-[#F0F0F01C] rounded-[10px] px-3 py-2 w-fit tracking-[-3%]'>
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default WhyItMatters
