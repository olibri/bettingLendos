import React from 'react'
import Circle from './Circle'

const Step = ({ n, text = "Step" }: { n?: number, text?: string }) => {
  return (
    <div className='flex flex-row items-center justify-center gap-3 mb-[70px]'>
      <Circle />
      <p className='text-[20px] text-[#6C6E74] font-medium tracking-[-6%] font-dm-sans mr-5'>{text} {n}</p>
      <div className='flex-1 h-1 rounded-2xl bg-[#F0F0F01A]' />
    </div>
  )
}

export default Step
