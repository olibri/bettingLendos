"use client"

import React, { useState, useEffect } from 'react'
import { joinWhitelist } from '../../services/whitelistApi'

interface WhitelistModalProps {
  isOpen: boolean
  onClose: () => void
}

const WhitelistModal = ({ isOpen, onClose }: WhitelistModalProps) => {
  const [email, setEmail] = useState('')
  const [twitter, setTwitter] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    const result = await joinWhitelist(email, twitter || undefined)

    setIsLoading(false)

    if (result.success) {
      setSuccess(true)
      setEmail('')
      setTwitter('')
    } else {
      setError(result.error || 'Something went wrong')
    }
  }

  const handleClose = () => {
    setEmail('')
    setTwitter('')
    setError('')
    setSuccess(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-6">
        <div className="bg-[#101010] border border-[#232323] rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          {success ? (
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-[#F0F0F0] mb-2 font-schibsted">
                You&apos;re on the list!
              </h2>
              <p className="text-[#6C6E74] mb-6">
                We&apos;ll notify you when we launch.
              </p>
              <button
                onClick={handleClose}
                className="w-full h-[45px] rounded-[10px] bg-[#F0F0F0] text-[#010101] font-medium transition-opacity hover:opacity-90"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold text-[#F0F0F0] mb-2 font-schibsted">
                Join the Waitlist
              </h2>
              <p className="text-[#6C6E74] mb-6">
                Be the first to know when we launch.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-[50px] bg-[#1A1A1A] border border-[#232323] rounded-[10px] px-4 text-[#F0F0F0] placeholder:text-[#6C6E74] focus:outline-none focus:border-[#F0F0F0]/30 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Twitter handle (optional)"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    className="w-full h-[50px] bg-[#1A1A1A] border border-[#232323] rounded-[10px] px-4 text-[#F0F0F0] placeholder:text-[#6C6E74] focus:outline-none focus:border-[#F0F0F0]/30 transition-colors"
                  />
                </div>

                {error && (
                  <p className="text-red-400 text-sm">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-[45px] rounded-[10px] bg-[#F0F0F0] text-[#010101] font-medium transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>

              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-[#6C6E74] hover:text-[#F0F0F0] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default WhitelistModal
