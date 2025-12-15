
import React, { Suspense, useEffect, useMemo, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { TopMenu2D } from '@/components/TopMenu2D'
import { loadMenuItems } from '@/data/menuItems'
import { allRoutes, type MenuItem } from '@/types/menu'
import './index.css'

const Loader = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
    <div className="animate-pulse h-40 rounded-2xl border flex items-center justify-center">
      <span>Loading…</span>
    </div>
  </div>
)

export default function App() {
  const [menuItems, setitems] = useState<MenuItem[]>([])
  useEffect(() => { (async () => setitems(await loadMenuItems()))() }, [])
  const routes = useMemo(() => allRoutes(menuItems), [menuItems])

  return (
    <>
      <TopMenu2D items={menuItems} />
      <main className="pt-16 relative z-10 p-8">
        <Suspense fallback={<Loader />}>
          <Routes>
          {routes.map(r => (
            <Route key={r.id} path={r.path} element={<LazyElement id={r.id} menuItems={menuItems} />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </>
  )
}

function LazyElement({ id, menuItems }: { id: string, menuItems: MenuItem[] }) {
  const item = menuItems.find(i => i.kind === 'item' && i.id === id)
  if (item && item.kind === 'item') {
    const Comp = item.body as React.ComponentType<any>
    return <Comp title={item.title} />
  }
  for (const g of menuItems) {
    if (g.kind === 'group') {
      const found = g.sections.find(s => s.id === id)
      if (found) {
        const Comp = found.body as React.ComponentType<any>
        return <Comp title={found.title} />
      }
    }
  }
}
