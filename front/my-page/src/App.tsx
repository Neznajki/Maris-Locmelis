
import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { TopMenu2D } from '@/components/TopMenu2D'
import { menuItems } from '@/data/menuItems'
import { allRoutes } from '@/types/menu'
import SpaceBackground from './components/SpaceBackground';
import Home from '@/pages/HomePage'
import './index.css'

const Loader = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
    <div className="animate-pulse h-40 rounded-2xl border flex items-center justify-center">
      <span>Loading…</span>
    </div>
  </div>
)

export default function App() {
  const routes = allRoutes(menuItems)

  return (
    <>
      <TopMenu2D items={menuItems} />
      {/* <SpaceBackground /> */}
      <main className="pt-16 relative z-10 text-white p-8">
        <Suspense fallback={<Loader />}>
          <Routes>
          <Route path="/" element={<Home />} />
          {routes.filter(r => r.path !== '/').map(r => (
            <Route key={r.id} path={r.path} element={<LazyElement id={r.id} />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

function LazyElement({ id }: { id: string }) {
  const item = menuItems.find(i => i.kind === 'item' && i.id === id)
  if (item && item.kind === 'item') {
    const Comp = item.body as React.ComponentType<any>
    return <Comp />
  }
  for (const g of menuItems) {
    if (g.kind === 'group') {
      const found = g.sections.find(s => s.id === id)
      if (found) {
        const Comp = found.body as React.ComponentType<any>
        return <Comp />
      }
    }
  }
  return null
}
