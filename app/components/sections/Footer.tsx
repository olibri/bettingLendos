"use client"

import React from 'react'
import CustomButton from '../ui/CustomButton'
import { navigationLinks } from '../../data/navigationLinks'
import { useWhitelist } from '../../context/WhitelistContext'

const footerColumns = [
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
  const { openWhitelistModal } = useWhitelist()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className='relative flex items-center justify-center mt-40 border-t border-[#232323] py-14 text-[#F0F0F0]'>
      <div className='custom-container flex flex-col lg:flex-row gap-15 items-start justify-between w-full'>
        <div className='max-w-md space-y-6 flex flex-col flex-1'>
          <p className='font-schibsted text-[32px] font-semibold'>expiryx</p>
          <p className='text-[#9A9CA3] text-[18px] leading-[150%]'>
            Transparent, skill-driven market predictions<br /> powered by real exchange prices.
          </p>
          <CustomButton text='Join Waitlist' className='w-[200px] bg-[#F0F0F0] text-[#010101]' onClick={openWhitelistModal} />
        </div>

        {/* Desktop Layout */}
        <div className='hidden lg:grid flex-2 md:grid-cols-3 gap-10'>
          <div className='space-y-4'>
            <p className='text-[18px] font-semibold text-[#6C6E74]'>Navigation</p>
            <ul className='space-y-3 text-[18px] text-[#F0F0F0] font-medium'>
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className='transition-opacity hover:opacity-80'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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

        {/* Mobile Layout */}
        <div className='lg:hidden flex flex-col gap-8 w-full'>
          {/* First row: Navigation + Legal */}
          <div className='grid grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <p className='text-[18px] font-semibold text-[#6C6E74]'>Navigation</p>
              <ul className='space-y-3 text-[18px] text-[#F0F0F0] font-medium'>
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className='transition-opacity hover:opacity-80'
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='space-y-4'>
              <p className='text-[18px] font-semibold text-[#6C6E74]'>{footerColumns[0].title}</p>
              <ul className='space-y-3 text-[18px] text-[#F0F0F0] font-medium'>
                {footerColumns[0].links.map((link) => (
                  <li key={link} className='transition-opacity hover:opacity-80'>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Second row: Follow Us (horizontal) */}
          <div className='space-y-4'>
            <p className='text-[18px] font-semibold text-[#6C6E74]'>{footerColumns[1].title}</p>
            <ul className='flex flex-row flex-wrap gap-4 text-[18px] text-[#F0F0F0] font-medium'>
              {footerColumns[1].links.map((link) => (
                <li key={link} className='transition-opacity hover:opacity-80'>
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
