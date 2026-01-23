"use client"

import React from 'react'
import Step from '../ui/Step'
import CustomButton from '../ui/CustomButton'
import { useWhitelist } from '../../context/WhitelistContext'

const ResultSection = () => {
  const { openWhitelistModal } = useWhitelist()

  return (
    <div className='mb-[120px]'>
      <Step n={4} />

      <div className='flex flex-col-reverse lg:gap-10 lg:flex-row items-center'>
        <div className='flex-2'>
          <video
            src="/Video Project 3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl"
          >
            Sorry, your browser doesn’t support embedded videos.
          </video>
        </div>
        <div className='flex-2 flex flex-col'>
          <p className='text-[#F0F0F0] text-[32px] lg:text-[64px] font-semibold tracking-[-2%] mb-5'>
            Result
          </p>
          <p className='text-[#6C6E74] text-[16px] lg:text-[24px] leading-[120%] tracking-[-3%] mb-[32px]'>
            When the countdown ends, the candle closes and the result is settled instantly — no delays, no manual actions.
          </p>

          <div className='flex flex-col gap-2 mb-[40px]'>
            <div className='text-[16px] text-[#F0F0F0] font-semibold border border-[#F0F0F01A] rounded-tl-[20px] rounded-tr-[20px] py-[14px] text-center lg:text-left lg:pl-[32px]'>
              Countdown ends — the final price is locked
            </div>
            <div className='text-[16px] text-[#F0F0F0] font-semibold border border-[#F0F0F01A] py-[14px] text-center lg:text-left lg:pl-[32px]'>
              Candle closes — market outcome is confirmed
            </div>
            <div className='text-[16px] text-[#F0F0F0] font-semibold border border-[#F0F0F01A] rounded-bl-[20px] rounded-br-[20px] py-[14px] text-center lg:text-left lg:pl-[32px]'>
              Instant settlement — your result is calculated immediately
            </div>
          </div>

          <CustomButton
            text="Join Waitlist"
            className='bg-[#F0F0F0] w-full lg:w-[140px] text-[#010101]'
            onClick={openWhitelistModal}
          />
        </div>
      </div>
    </div>
  )
}

export default ResultSection
