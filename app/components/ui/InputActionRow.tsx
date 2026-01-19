import React from 'react'
import clsx from 'clsx'
import CustomButton from './CustomButton'

type InputActionRowProps = {
  placeholder: string
  buttonText: string
  containerClassName?: string
  buttonClassName?: string
  readOnly?: boolean
}

const InputActionRow = ({
  placeholder,
  buttonText,
  containerClassName,
  buttonClassName,
  readOnly = true,
}: InputActionRowProps) => {
  return (
    <div
      className={clsx(
        'flex w-full max-w-130 items-center gap-3 rounded-[12px] bg-[#101010] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]',
        containerClassName,
      )}
    >
      <input
        type="text"
        placeholder={placeholder}
        readOnly={readOnly}
        className='flex-1 rounded-[10px] bg-transparent px-3 text-[#F0F0F099] placeholder:text-[#6C6E74] focus:outline-none'
      />
      <CustomButton
        className={clsx('w-[200px]', buttonClassName)}
        text={buttonText}
      />
    </div>
  )
}

export default InputActionRow
