"use client"

import React, { useState, useEffect } from 'react'
import CustomButton from '../ui/CustomButton'
import { navigationLinks } from '../../data/navigationLinks'
import { useWhitelist } from '../../context/WhitelistContext'

const Header = () => {
  const [selected, setSelected] = useState<string>(navigationLinks[0]?.label ?? '')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openWhitelistModal } = useWhitelist()

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault()
    setSelected(label)
    setIsMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header className='custom-container flex flex-row items-center justify-between py-6 w-full relative z-50'>
        <p className='font-schibsted font-semibold text-[20px]'>expiryx.</p>
        
        {/* Desktop Navigation */}
        <nav className='hidden lg:block'>
          <ul className='flex flex-row gap-2 font-dm-sans text-[#C9CCD9] text-[16px]'>
            {navigationLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.label)}
                  className={`px-5 py-2 cursor-pointer transition-colors ${selected === item.label ? 'text-white' : 'hover:text-white'
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className='hidden lg:block'>
          <CustomButton
            className='w-[200px] bg-[#F0F0F0] text-[#010101]'
            text="Join Waitlist"
            onClick={openWhitelistModal}
          />
        </div>

        {/* Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className='lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50'
          aria-label='Toggle menu'
        >
          {/* Top stick */}
          <span
            className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${
              isMenuOpen 
                ? 'rotate-45 translate-y-[1px]' 
                : '-translate-y-1'
            }`}
          />
          {/* Bottom stick */}
          <span
            className={`block w-6 h-[2px] bg-white rounded-full transition-all duration-300 ease-in-out ${
              isMenuOpen 
                ? '-rotate-45 -translate-y-[1px]' 
                : 'translate-y-1'
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Side Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 w-full h-full bg-[#010101] z-40 transition-transform duration-500 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='starfield' aria-hidden="true" />
        <div className='relative z-10 flex flex-col h-full pt-24 px-8'>
          <nav className='flex-1'>
            <ul className='flex flex-col gap-2 font-dm-sans text-[#C9CCD9]'>
              {navigationLinks.map((item, index) => (
                <li 
                  key={item.label}
                  className={`transition-all duration-500 ease-out ${
                    isMenuOpen 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-8'
                  }`}
                  style={{ 
                    transitionDelay: isMenuOpen ? `${(index + 1) * 100}ms` : '0ms' 
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.label)}
                    className={`block py-4 text-2xl font-medium cursor-pointer transition-colors border-b border-white/10 ${
                      selected === item.label ? 'text-white' : 'hover:text-white'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile CTA Button */}
          <div 
            className={`pb-12 transition-all duration-500 ease-out ${
              isMenuOpen 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              transitionDelay: isMenuOpen ? `${(navigationLinks.length + 1) * 100}ms` : '0ms' 
            }}
          >
            <CustomButton
              className='w-full bg-[#F0F0F0] text-[#010101]'
              text="Join Waitlist"
              onClick={openWhitelistModal}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
