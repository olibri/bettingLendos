"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react'
import WhitelistModal from '../components/ui/WhitelistModal'

interface WhitelistContextType {
  openWhitelistModal: () => void
  closeWhitelistModal: () => void
}

const WhitelistContext = createContext<WhitelistContextType | undefined>(undefined)

export function WhitelistProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openWhitelistModal = () => setIsModalOpen(true)
  const closeWhitelistModal = () => setIsModalOpen(false)

  return (
    <WhitelistContext.Provider value={{ openWhitelistModal, closeWhitelistModal }}>
      {children}
      <WhitelistModal isOpen={isModalOpen} onClose={closeWhitelistModal} />
    </WhitelistContext.Provider>
  )
}

export function useWhitelist() {
  const context = useContext(WhitelistContext)
  if (context === undefined) {
    throw new Error('useWhitelist must be used within a WhitelistProvider')
  }
  return context
}
