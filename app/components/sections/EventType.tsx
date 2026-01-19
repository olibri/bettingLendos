import React from 'react'
import Step from '../ui/Step'
import Image from 'next/image'

const EventType = () => {
  return (
    <div className='mb-[120px]'>
      <Step n={3} />
      <div className='flex flex-col lg:flex-row items-center gap-[60px] lg:gap-[90px]'>
        <div className='flex flex-col flex-2'>
          <p className='text-[32px] lg:text-[64px] text-[#F0F0F0] font-semibold font-schibsted tracking-[-2%] leading-[100%] mb-[16px] lg:mb-[32px]'>
            Choose<br /> event type
          </p>
          <p className='text-[#6C6E74] text-[16px] lg:text-[24px] leading-[120%] tracking-[3%] font-medium'>
            Select a market based on real cryptocurrency trading pairs.
            All prices are pulled live from exchanges and update continuously.
          </p>
        </div>
        <div className='flex flex-4 w-full lg:w-fit'>
          <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-2 gap-4 w-full">
            <div className="w-full lg:col-span-3 bg-[#191919] p-[24px] lg:p-[32px] rounded-[20px] flex flex-col justify-between">
              <Image
                className='mb-[50px]'
                src="/Group 2147258266.svg"
                alt="icon"
                width={64}
                height={64}
              />
              <div>
                <p className='text-[24px] lg:text-[32px] text-[#F0F0F0] tracking-[-3%] leading-[130%] font-semibold mb-[16px]'>
                  Candle Color
                </p>
                <p className='text-[14px] lg:text-[18px] text-[#6C6E74] tracking-[-3%] leading-[130%] font-medium'>
                  Will the candle close Green or Red?
                </p>
              </div>
            </div>
            <div className="lg:col-span-3 lg:col-start-4 bg-[#191919] p-[24px] lg:p-[32px] rounded-[20px] flex flex-col justify-between">
              <Image
                className='mb-[50px]'
                src="/Group 2147258267.svg"
                alt="icon"
                width={64}
                height={64}
              />
              <div>
                <p className='text-[24px] lg:text-[32px] text-[#F0F0F0] tracking-[-3%] leading-[130%] font-semibold mb-[16px]'>
                  Price Level
                </p>
                <p className='text-[14px] lg:text-[18px] text-[#6C6E74] tracking-[-3%] leading-[130%] font-medium'>
                  Close Above or Below current price?
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-start-2 bg-[#191919] p-[24px] lg:p-[32px] rounded-[20px] flex flex-col justify-between">
              <Image
                className='mb-[50px]'
                src="/Frame 2147258268.svg"
                alt="icon"
                width={64}
                height={64}
              />
              <div>
                <p className='text-[24px] lg:text-[32px] text-[#F0F0F0] tracking-[-3%] leading-[130%] font-semibold mb-[16px]'>
                  Touch Previous Low
                </p>
                <p className='text-[14px] lg:text-[18px] text-[#6C6E74] tracking-[-3%] leading-[130%] font-medium'>
                  Will price touch the previous candle’s low?
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-3 lg:row-start-2 bg-[#191919] p-[24px] lg:p-[32px] rounded-[20px] flex flex-col justify-between">
              <Image
                className='mb-[50px]'
                src="/Frame 2147258268-2.svg"
                alt="icon"
                width={64}
                height={64}
              />
              <div>
                <p className='text-[24px] lg:text-[32px] text-[#F0F0F0] tracking-[-3%] leading-[130%] font-semibold mb-[16px]'>
                  Even / Odd Close
                </p>
                <p className='text-[14px] lg:text-[18px] text-[#6C6E74] tracking-[-3%] leading-[130%] font-medium'>
                  Will close price (in cents) be even or odd?
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 lg:col-start-5 lg:row-start-2 bg-[#191919] p-[24px] lg:p-[32px] rounded-[20px] flex flex-col justify-between">
              <Image
                className='mb-[50px]'
                src="/Frame 2147258268-2.svg"
                alt="icon"
                width={64}
                height={64}
              />
              <div>
                <p className='text-[24px] lg:text-[32px] text-[#F0F0F0] tracking-[-3%] leading-[130%] font-semibold mb-[16px]'>
                  % Move
                </p>
                <p className='text-[14px] lg:text-[18px] text-[#6C6E74] tracking-[-3%] leading-[130%] font-medium'>
                  Bullish ({'>'}0.1%) or Bearish?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventType
