
import React from 'react'

export const Paragraph: React.FC<{ title: React.ReactNode, children: React.ReactNode }> = ({ title, children }) => {
  return (
    <p className="text-gray-600">
      {children}
    </p>
  )
}
