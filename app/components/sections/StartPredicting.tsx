import React from 'react'
import DotGrid from '../ui/DotGrid'
import CustomButton from '../ui/CustomButton'

const StartPredicting = () => {
  return (
    <div className='mb-[120px] relative h-[800px] w-full'>
      <DotGrid
        dotSize={2}
        gap={15}
        baseColor="#271E37"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <div className='absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col items-center justify-center gap-10'>
        <p className='text-[64px] text-[#F0F0F0] font-semibold tracking-[-2%] text-center font-schibsted leading-[100%]'>
          Start predicting the market today.
        </p>
        <CustomButton
          text="Join Waitlist"
          className='w-[200px] bg-[#F0F0F0] text-[#010101]'
        />
      </div>
    </div>
  )
}

export default StartPredicting
