import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'

const TopSection = () => {
  return (
    <section className='relative overflow-hidden rounded-3xl bg-[#010101]'>
      <div className='starfield' aria-hidden="true" />
      <div className="relative z-10 flex flex-col gap-[96px]">
        <Header />
        <HeroSection />
      </div>
    </section>
  )
}

export default TopSection
