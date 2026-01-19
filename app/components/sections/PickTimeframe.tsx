import React from 'react'
import Step from '../ui/Step'
import CustomColorText from '../ui/CustomColorText'
import Image from 'next/image'

const PickTimeframe = () => {
  return (
    <div className='overflow-hidden mb-[120px]'>
      <Step n={2} />
      <p className='text-[64px] text-[#F0F0F0] font-semibold font-schibsted tracking-[-2%] text-center mb-[25px]'>
        Pick timeframe
      </p>

      <div className='text-[#F0F0F0] text-[32px] text-center font-medium tracking-[-3%] w-full mb-[60px] leading-[100%]'>
        Choose how long the market will move <CustomColorText>
          before your <br /> result is settled.
        </CustomColorText>
        Different timeframes change the <br />
        <CustomColorText> pace and strategy</CustomColorText> of the game.
      </div>

      <Image
        src="/Group2147258269.png"
        alt="Pick Timeframe Illustration"
        width={1400}
        height={1400}
        className='mx-auto object-contain'
       />

       <p className='text-[#6C6E74] text-[16px] tracking-[-3%] leading-[130%] text-center font-medium mt-[20px]'>
        Time starts counting after you make<br /> your prediction
       </p>
    </div>
  )
}

export default PickTimeframe
