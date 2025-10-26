
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

export interface MobileNavProps {
  items: MenuItem[]
  openIndex: number | null
  onToggle: (index: number) => void
  onNavigate?: () => void
}

export const MobileNav: React.FC<MobileNavProps> = ({ items, openIndex, onToggle, onNavigate }) => {
  return (
    <div className="md:hidden py-2">
      <ul className="space-y-1">
        {items.map((item, i) => {
          if (item.kind === 'item') {
            return (
              <li key={item.id}>
                <Link
                  className="w-full block text-left px-3 py-2 rounded-lg hover:bg-gray-100"
                  to={item.path}
                  onClick={onNavigate}
                >
                  {item.title}
                </Link>
              </li>
            )
          }

          const isOpen = openIndex === i
          return (
            <li key={item.id} className="border rounded-xl">
              <button
                className="w-full flex items-center justify-between px-3 py-2"
                onClick={() => onToggle(i)}
                aria-expanded={isOpen}
              >
                <span className="font-medium">{item.title}</span>
                <ChevronDown className={cx('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
              </button>

              {isOpen && (
                <ul className="px-2 pb-2">
                  {item.sections.map((s) => (
                    <li key={s.id}>
                      <Link
                        className="block text-left rounded-lg px-3 py-2 text-sm hover:bg-gray-100"
                        to={s.path}
                        onClick={(e) => { e.stopPropagation(); onNavigate?.() }}
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
