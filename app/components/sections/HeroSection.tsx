"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import InputActionRow from '../ui/InputActionRow'
import { joinWhitelist } from '../../services/whitelistApi'

const HeroSection = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  
  // Wallet connection
  const { publicKey, disconnect } = useWallet()
  const { setVisible } = useWalletModal()
  const walletAddress = publicKey?.toBase58()

  const handleConnectWallet = () => {
    if (walletAddress) {
      // If already connected, disconnect
      disconnect()
    } else {
      // Open wallet selection modal
      setVisible(true)
    }
  }

  const handleScrollClick = () => {
    const target = document.querySelector('#about')
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleJoinWaitlist = async () => {
    if (!email) {
      setMessage({ type: 'error', text: 'Please enter your email' })
      return
    }

    if (!walletAddress) {
      setMessage({ type: 'error', text: 'Please connect your wallet' })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email' })
      return
    }

    setIsLoading(true)
    setMessage(null)

    const result = await joinWhitelist(email, walletAddress || '')

    setIsLoading(false)

    if (result.success) {
      setMessage({ type: 'success', text: "You're on the list! 🎉" })
      setEmail('')
    } else {
      setMessage({ type: 'error', text: result.error || 'Something went wrong' })
    }
  }

  return (
    <div>
      <div className='flex flex-col items-center justify-center custom-container'>
        <h1 className='text-[50px] lg:text-[120px] text-[#F0F0F0] font-schibsted font-semibold text-center mb-10 leading-[87%] tracking-[-3%]'>
          Bet on live<br /> market moves<br /> every minute
        </h1>
        <p className='text-[24px] text-[#6C6E74] text-center tracking-[-3%] leading-[130%]'>
          Predict short-term price behavior on real<br /> exchange charts.
        </p>
      </div>
      <div className='relative flex flex-col w-full items-center bg-[url("/Group2147258271.png")] lg:bg-[url("/Group2147258273.png")] min-h-[300px] lg:min-h-[500px] bg-cover bg-center justify-center overflow-hidden rounded-3xl'>
        <div className='relative z-10 flex w-full flex-col items-center justify-center gap-4 px-5 lg:px-0'>
          <InputActionRow
            placeholder={walletAddress ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)}` : 'Sign wallet'}
            buttonText={walletAddress ? 'Disconnect' : 'Connect Wallet'}
            buttonClassName='bg-[#F0F0F0] text-[#010101]'
            onButtonClick={handleConnectWallet}
          />
          <InputActionRow
            placeholder='Email'
            buttonText={isLoading ? 'Joining...' : 'Join Waitlist'}
            buttonClassName='bg-[#F0F0F033] text-[#F0F0F0]'
            readOnly={false}
            value={email}
            onChange={setEmail}
            onButtonClick={handleJoinWaitlist}
            type='email'
          />
          {message && (
            <p className={`text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
              {message.text}
            </p>
          )}
        </div>
      </div>
      <div 
        onClick={handleScrollClick}
        className='flex flex-col items-center justify-center cursor-pointer animate-bounce mb-10 lg:mb-20'
      >
        <Image
          src="/chevron-down-double.svg"
          alt="arrows"
          width={24}
          height={24}
          className=''
        />
        <p className='text-[#6C6E74] text-[16px]'>Scroll</p>
      </div>
    </div>
  )
}

export default HeroSection
