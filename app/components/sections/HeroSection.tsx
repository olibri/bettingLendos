import Image from 'next/image'
import React from 'react'
import InputActionRow from '../ui/InputActionRow'

const HeroSection = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center custom-container'>
        <h1 className='text-[50px] lg:text-[120px] text-[#F0F0F0] font-schibsted font-semibold text-center mb-10 leading-[87%] tracking-[-3%]'>
          Bet on live<br /> market moves<br /> every minute
        </h1>
        <p className='text-[24px] text-[#6C6E74] text-center tracking-[-3%] leading-[130%]'>
          Predict short-term price behavior on real<br /> exchange charts.
        </p>
      </div>
      <div className='relative flex flex-col w-full items-center bg-[url("/Group2147258271.png")] lg:bg-[url("/Group2147258273.png")] min-h-[300px] lg:min-h-[500px] bg-cover bg-center justify-center overflow-hidden rounded-3xl'>
        <div className='relative z-10 flex w-full flex-col items-center justify-center gap-4 mb-15 px-5 lg:px-0'>
          <InputActionRow
            placeholder='Sign wallet'
            buttonText='Connect Wallet'
            buttonClassName='bg-[#F0F0F0] text-[#010101]'
          />
          <InputActionRow
            placeholder='Email'
            buttonText='Join Wishlist'
            buttonClassName='bg-[#F0F0F033] text-[#F0F0F0]'
          />
        </div>
        <div className='flex flex-col items-center justify-center cursor-pointer animate-bounce'>
          <Image
            src="/chevron-down-double.svg"
            alt="arrows"
            width={24}
            height={24}
            className=''
          />
          <p  className='text-[#6C6E74] text-[16px]'>Scroll</p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
