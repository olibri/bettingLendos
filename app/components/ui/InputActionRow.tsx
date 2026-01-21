import React from 'react'
import clsx from 'clsx'
import CustomButton from './CustomButton'

type InputActionRowProps = {
  placeholder: string
  buttonText: string
  containerClassName?: string
  buttonClassName?: string
  readOnly?: boolean
  value?: string
  onChange?: (value: string) => void
  onButtonClick?: () => void
  type?: string
}

const InputActionRow = ({
  placeholder,
  buttonText,
  containerClassName,
  buttonClassName,
  readOnly = true,
  value,
  onChange,
  onButtonClick,
  type = 'text',
}: InputActionRowProps) => {
  return (
    <div
      className={clsx(
        'flex w-full max-w-full lg:max-w-130 items-center gap-3 rounded-[12px] bg-[#101010] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)]',
        containerClassName,
      )}
    >
      <input
        type={type}
        placeholder={placeholder}
        readOnly={readOnly}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className='w-[50%] lg:w-full bg-transparent px-3 text-[#F0F0F099] placeholder:text-[#6C6E74] focus:outline-none'
      />
      <CustomButton
        className={clsx('w-[50%] lg:w-[200px]', buttonClassName)}
        text={buttonText}
        onClick={onButtonClick}
      />
    </div>
  )
}

export default InputActionRow
