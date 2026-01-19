import clsx from 'clsx'

type CustomButtonProps = {
  text: string
  className?: string
}

const CustomButton = ({ text, className }: CustomButtonProps) => {
  return (
    <button
      className={clsx(
        'h-[45px] rounded-[10px] text-[14px] ld:text-[18px] font-dm-sans font-medium transition-opacity hover:opacity-90',
        className,
      )}
    >
      {text}
    </button>
  )
}

export default CustomButton
