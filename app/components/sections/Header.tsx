import React from 'react'
import CustomButton from '../ui/CustomButton'

const navItems = ['Home', 'About Us', 'Game Mechanics', 'Trust & Edge']

const Header = () => {
  return (
    <header className='custom-container flex flex-row items-center justify-between py-6 w-full'>
      <p className='font-schibsted font-semibold text-[20px]'>expiryx.</p>
      <nav>
        <ul className='flex flex-row gap-2 font-dm-sans text-[#C9CCD9] text-[16px]'>
          {navItems.map((item) => (
            <li key={item} className='px-5 py-2 hover:text-white cursor-pointer transition-colors'>
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <CustomButton
        className='w-[200px] bg-[#F0F0F0] text-[#010101]'
        text="Join Waitlist"
      />
    </header>
  )
}

export default Header
