"use client"

import React, { useEffect, useState } from 'react'
import Step from '../ui/Step'
import Circle from '../ui/Circle'
import Image from 'next/image'

const primaryPairs = ['BTCUSDT', 'ETHUSDT', 'SOLUSDT'] as const
const otherPairs = ['MATICUSDT', 'ADAUSDT', 'XRPUSDT', 'AVAXUSDT']

const formatSymbol = (symbol: string) => {
  const quote = 'USDT'
  const base = symbol.replace(quote, '')
  return `${base} / ${quote}`
}

const HowItWorks = () => {
  const [selectedPair, setSelectedPair] = useState<string>(primaryPairs[0])
  const [price, setPrice] = useState<string>('0.00')
  const [changePercent, setChangePercent] = useState<string>('0.00')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    let ignore = false

    const fetchTicker = async () => {
      try {
        setIsLoading(true)
        const res = await fetch(
          `https://api.binance.com/api/v3/ticker/24hr?symbol=${selectedPair}`,
          { cache: 'no-store' },
        )
        if (!res.ok) throw new Error('Failed to fetch price')
        const data = await res.json()
        if (!ignore) {
          setPrice(Number(data.lastPrice).toFixed(2))
          setChangePercent(Number(data.priceChangePercent).toFixed(2))
        }
      } catch (error) {
        if (!ignore) {
          setPrice('0.00')
          setChangePercent('0.00')
        }
      } finally {
        if (!ignore) setIsLoading(false)
      }
    }

    fetchTicker()
    const interval = setInterval(fetchTicker, 30000)

    return () => {
      ignore = true
      clearInterval(interval)
    }
  }, [selectedPair])

  const priceDisplay = isLoading ? 'Updating…' : price
  const changeDisplay = `${Number(changePercent) >= 0 ? '+' : ''}${changePercent}%`
  const isPositiveChange = Number(changePercent) >= 0
  const isOtherActive = !primaryPairs.includes(selectedPair as (typeof primaryPairs)[number])

  const handleSelectPair = (symbol: string) => {
    setSelectedPair(symbol)
  }

  const handleSelectOther = () => {
    const randomSymbol = otherPairs[Math.floor(Math.random() * otherPairs.length)]
    setSelectedPair(randomSymbol)
  }

  return (
    <div className='flex flex-col mb-[120px]'>
      <p className='text-[64px] mb-[70px] text-[#F0F0F0] text-center tracking-[-2%] font-semibold font-schibsted leading-[100%]'>
        How it works/<br />
        Game mechanics
      </p>
      <Step n={1} />

      <p className='mb-[70px] text-[64px] text-[#F0F0F0] font-semibold font-schibsted tracking-[-2%]'>
        Choose market
      </p>
      <div className='flex flex-row items-start gap-[100px]'>
        <div className='flex-1 flex flex-col gap-4'>
          <div className='rounded-[20px] p-[32px] flex flex-col custom-border'>
            <div className='flex flex-row items-center gap-1 mb-5'>
              <Circle />
              <p className='text-[18px] text-[#6C6E74]'>Live Market Price</p>
            </div>
            <p className='text-[32px] text-[#B590E7] font-semibold mb-1'>
              {formatSymbol(selectedPair)}
            </p>
            <p className='text-[#F0F0F0] text-[32px] font-semibold mb-[37px] flex items-start gap-2'>
              {priceDisplay}
              <span className='relative text-[16px] text-[#6C6E74] tracking-[-3%]'>USDT</span>
            </p>
            <div className='flex flex-row items-end justify-between'>
              <div
                className={`flex items-center justify-center gap-1.5 rounded-[100px] h-[33px] px-[25px] border ${isPositiveChange
                    ? 'border-[#108B68] bg-[#108B682E] text-[#108B68]'
                    : 'border-[#8B1410] bg-[#8B14102E] text-[#8B1410]'
                  }`}
              >
                <p className='text-[18px]'>
                  {changeDisplay}
                </p>
                <Image
                  src={isPositiveChange ? '/trend-up-01.svg' : '/Group-16.svg'}
                  alt={isPositiveChange ? 'arrow up right' : 'arrow down right'}
                  width={18}
                  height={18}
                />
              </div>
              <p className='text-[18px] text-[#6C6E74]'>
                Updated in real time
              </p>
            </div>
          </div>
          <div className='border border-[#F0F0F01A] p-[32px] flex flex-col rounded-[20px]'>
            <p className='text-[18px] text-[#6C6E74] font-medium'>⚡ Real Exchange Data</p>
            <p className='text-[18px] text-[#F0F0F0] mb-3 mt-5 font-medium'>Prices are streamed in real time directly from major cryptocurrency exchanges, reflecting actual market conditions at every moment.</p>
            <p className='text-[18px] text-[#6C6E74] text-right'>
              Updated in real time
            </p>
          </div>
        </div>
        <div className='flex-1'>
          <p className='text-[#6C6E74] text-[24px] tracking-[-3%] leading-[120%] font-medium mb-[70px]'>
            Select a market based on real cryptocurrency trading pairs. All prices are pulled live from exchanges and update continuously.
            This means every decision you make reflects the real state of the market at that moment.
          </p>

          <div className='flex flex-row items-center gap-3 justify-center'>
            {primaryPairs.map((symbol, index) => {
              const isActive = symbol === selectedPair
              return (
                <button
                  key={symbol}
                  onClick={() => handleSelectPair(symbol)}
                  className={`h-[50px] w-full text-[18px] font-medium transition-colors ${isActive
                      ? 'bg-[linear-gradient(258.97deg,#B590E7_-9.97%,#724AAF_94.32%)] text-[#F0F0F0] shadow-[0_10px_30px_rgba(145,110,243,0.35)]'
                      : 'bg-[#191919] text-[#F0F0F0] hover:bg-[#232323]'
                    } ${index === 0
                    && 'rounded-tl-[25px] rounded-bl-[25px]'
                    }`}
                >
                  {symbol}
                </button>
              )
            })}
            <button
              onClick={handleSelectOther}
              className={`h-[50px] w-full text-[18px] font-medium transition-colors rounded-tr-[25px] rounded-br-[25px] ${isOtherActive
                  ? 'bg-[linear-gradient(258.97deg,#B590E7_-9.97%,#724AAF_94.32%)] text-[#F0F0F0] shadow-[0_10px_30px_rgba(145,110,243,0.35)]'
                  : 'bg-[#191919] text-[#F0F0F0] hover:bg-[#232323]'
                }`}
            >
              Other
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
