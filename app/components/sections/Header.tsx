"use client"

import React, { useState } from 'react'
import CustomButton from '../ui/CustomButton'
import { navigationLinks } from '../../data/navigationLinks'

const Header = () => {
  const [selected, setSelected] = useState<string>(navigationLinks[0]?.label ?? '')

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault()
    setSelected(label)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header className='custom-container flex flex-row items-center justify-between py-6 w-full'>
      <p className='font-schibsted font-semibold text-[20px]'>expiryx.</p>
      <nav>
        <ul className='flex flex-row gap-2 font-dm-sans text-[#C9CCD9] text-[16px]'>
          {navigationLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.label)}
                className={`px-5 py-2 cursor-pointer transition-colors ${
                  selected === item.label ? 'text-white' : 'hover:text-white'
                }`}
              >
                {item.label}
              </a>
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
