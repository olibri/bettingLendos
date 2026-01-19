import React from 'react'
import Step from '../ui/Step'
import Circle from '../ui/Circle'
import Image from 'next/image'

const HowItWorks = () => {
  return (
    <div className='flex flex-col mb-[120px]'>
      <p className='text-[64px] mb-[70px] text-[#F0F0F0] text-center tracking-[-2%] font-semibold font-schibsted leading-[100%]'>
        How it works/<br />
        Game mechanics
      </p>
      <Step n={1} />

      <p className=' my-[70px] text-[64px] text-[#F0F0F0] font-semibold font-schibsted tracking-[-2%]'>
        Choose market
      </p>
      <div className='flex flex-row items-start gap-[100px]'>
        <div className='flex-1 flex flex-col gap-4'>
          <div className='rounded-[20px] p-[32px] flex flex-col custom-border'>
            <div className='flex flex-row items-center gap-1 mb-5'>
              <Circle />
              <p className='text-[18px] text-[#6C6E74]'>Live Market Price</p>
            </div>
            <p className='text-[32px] text-[#B590E7] font-semibold mb-1'>
              BTC / USDT
            </p>
            <p className='text-[#F0F0F0] text-[32px] font-semibold mb-[37px] flex items-start gap-2'>
              43,215.40
              <span className='relative text-[16px] text-[#6C6E74] tracking-[-3%]'>USDT</span>
            </p>
            <div className='flex flex-row items-end justify-between'>
              <div className='bg-[#108B682E] flex items-center justify-center gap-1.5 border border-[#108B68] rounded-[100px] h-[33px] px-[25px]'>
                <p className='text-[#108B68] text-[18px]'>
                  +2.34%
                </p>
                <Image
                  src="/trend-up-01.svg"
                  alt="arrow up right"
                  width={18}
                  height={18}
                />
              </div>
              <p className='text-[18px] text-[#6C6E74]'>
                Updated in real time
              </p>
            </div>
          </div>
          <div className='border border-[#F0F0F01A] p-[32px] flex flex-col rounded-[20px]'>
            <p className='text-[18px] text-[#6C6E74] font-medium'>⚡ Real Exchange Data</p>
            <p className='text-[18px] text-[#F0F0F0] mb-3 mt-5 font-medium'>Prices are streamed in real time directly from major cryptocurrency exchanges, reflecting actual market conditions at every moment.</p>
            <p className='text-[18px] text-[#6C6E74] text-right'>
              Updated in real time
            </p>
          </div>
        </div>
        <div className='flex-1'>
          <p className='text-[#6C6E74] text-[24px] tracking-[-3%] leading-[120%] font-medium mb-[70px]'>
            Select a market based on real cryptocurrency trading pairs. All prices are pulled live from exchanges and update continuously.
            This means every decision you make reflects the real state of the market at that moment.
          </p>

          <div className='flex flex-row items-center gap-3 justify-center'>
            <button className='text-[18px] text-[#F0F0F0] font-medium bg-[linear-gradient(258.97deg,#B590E7_-9.97%,#724AAF_94.32%)] h-[50px] rounded-tl-[25px] rounded-bl-[25px] w-full'>
              BTCUSDT
            </button>
            <button className='text-[18px] text-[#F0F0F0] font-medium bg-[#191919] h-[50px] w-full'>
              ETHUSDT
            </button>
            <button className='text-[18px] text-[#F0F0F0] font-medium bg-[#191919] h-[50px] w-full'>
              SOLUSDT
            </button>
            <button className='text-[18px] text-[#F0F0F0] font-medium bg-[#191919] h-[50px] w-full rounded-tr-[25px] rounded-br-[25px]'>
              Other
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
