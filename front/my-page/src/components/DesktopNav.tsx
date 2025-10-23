
import React from 'react'
import type { MenuItem } from '@/types/menu'
import { Link } from 'react-router-dom'

const ChevronDown = ({ className = '' }: { className?: string }) => (
  <svg className={`h-4 w-4 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
)

function cx(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(' ')
}

export interface DesktopNavProps {
  items: MenuItem[]
  openIndex: number | null
  onToggle: (index: number) => void
}

export const DesktopNav: React.FC<DesktopNavProps> = ({ items, openIndex, onToggle }) => {
  return (
    <nav className="hidden md:flex items-center gap-1 relative">
      {items.map((item, i) => {
        if (item.kind === 'item') {
          return (
            <Link
              key={item.id}
              to={item.path}
              className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2"
            >
              {item.title}
            </Link>
          )
        }

        const isOpen = openIndex === i
        return (
          <div key={item.id} className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={isOpen}
              onClick={() => onToggle(i)}
              className={cx(
                'group inline-flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium focus:outline-none focus:ring-2',
                isOpen ? 'bg-gray-100' : 'hover:bg-gray-100'
              )}
            >
              <span>{item.title}</span>
              <ChevronDown className={cx('h-4 w-4 transition-transform duration-200', isOpen && 'rotate-180')} />
            </button>

            {isOpen && (
              <div role="menu" className="absolute left-0 mt-2 w-64 overflow-hidden rounded-2xl border bg-white shadow-xl">
                <ul className="py-2">
                  {item.sections.map((s) => (
                    <li key={s.id}>
                      <Link
                        className="block px-4 py-2 text-sm hover:bg-gray-50"
                        to={s.path}
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </nav>
  )
}
