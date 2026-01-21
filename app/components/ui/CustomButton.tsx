import clsx from 'clsx'

type CustomButtonProps = {
  text: string
  className?: string
  onClick?: () => void
}

const CustomButton = ({ text, className, onClick }: CustomButtonProps) => {
  return (
    <button
      onClick={onClick}
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
