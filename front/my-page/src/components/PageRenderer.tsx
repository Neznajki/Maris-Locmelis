
import React from 'react'

export const PageContainer: React.FC<{ title: React.ReactNode, children: React.ReactNode }> = ({ title, children }) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-8 space-y-8 relative z-10 p-8">
      {children}
    </main>
  )
}
