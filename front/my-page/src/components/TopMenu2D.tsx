import React, { useEffect, useRef, useState } from 'react'
import { DesktopNav } from './DesktopNav'
import { MobileNav } from './MobileNav'
import type { MenuItem } from '@/types/menu'
import { useLocation } from 'react-router-dom'

export interface TopMenu2DProps {
  items: MenuItem[]
}

export const TopMenu2D: React.FC<TopMenu2DProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current) return
      if (!menuRef.current.contains(e.target as Node)) setOpenIndex(null)
    }
    document.addEventListener('onClick', onClick)
    return () => document.removeEventListener('onClick', onClick)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.classList.add('body-lock')
    else document.body.classList.remove('body-lock')
    return () => document.body.classList.remove('body-lock')
  }, [mobileOpen])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenIndex(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Close menus on navigation
  useEffect(() => { setOpenIndex(null); setMobileOpen(false) }, [location.pathname])

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <span className="text-xl font-bold tracking-tight">
            {(() => {
              const path = location.pathname
              const current = items
                .flatMap(i => i.kind === 'group' ? i.sections : [i])
                .find(s => s.path === path)
              return current ? current.title : 'Home'
            })()}
          </span>

          <div ref={menuRef} className="flex items-center">
            <div className="hidden md:flex flex-1 items-center justify-end">
              <DesktopNav
                items={items}
                openIndex={openIndex}
                onToggle={(i) => setOpenIndex((p) => (p === i ? null : i))}
              />
            </div>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 ml-2"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(v => !v)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <MobileNav
            items={items}
            openIndex={openIndex}
            onToggle={(i) => setOpenIndex((p) => (p === i ? null : i))}
            onNavigate={() => setMobileOpen(false)}
          />
        )}
      </div>
    </header>
  )
}