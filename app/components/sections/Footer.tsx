import React from 'react'
import CustomButton from '../ui/CustomButton'

const footerColumns = [
  {
    title: 'Navigation',
    links: ['Home', 'About Us', 'Game Mechanics', 'Trust & Edge'],
  },
  {
    title: 'Legal',
    links: ['Privacy Policy', 'Terms of Service'],
  },
  {
    title: 'Follow Us',
    links: ['Linkedin', 'Instagram', 'X/Twitter', 'Facebook'],
  },
]

const Footer = () => {
  return (
    <footer className='relative flex items-center justify-center mt-40 border-t border-[#232323] px-10 py-14 text-[#F0F0F0]'>
      <div className='custom-container flex flex-row gap-15 items-start justify-between w-full'>
        <div className='max-w-md space-y-6 flex flex-col flex-1'>
          <p className='font-schibsted text-[32px] font-semibold'>expiryx</p>
          <p className='text-[#9A9CA3] text-[18px] leading-[150%]'>
            Transparent, skill-driven market predictions<br /> powered by real exchange prices.
          </p>
          <CustomButton text='Join Waitlist' className='w-[200px] bg-[#F0F0F0] text-[#010101]' />
        </div>

        <div className='grid flex-2 md:grid-cols-3'>
          {footerColumns.map((column) => (
            <div key={column.title} className='space-y-4'>
              <p className='text-[18px] font-semibold text-[#6C6E74]'>{column.title}</p>
              <ul className='space-y-3 text-[18px] text-[#F0F0F0] font-medium'>
                {column.links.map((link) => (
                  <li key={link} className='transition-opacity hover:opacity-80'>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
