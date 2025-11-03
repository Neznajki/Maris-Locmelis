
import React from 'react'

function renderParagraph(text: string) {
  if (typeof text !== 'string') return text ?? null;
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((part, i) =>
    /^https?:\/\//.test(part) ? (
      <a key={i} href={part} target="_blank" rel="noopener noreferrer">
        {part}
      </a>
    ) : (
      part
    )
  );
}

export const Paragraph: React.FC<{children: React.ReactNode }> = ({ children }) => {
  return (
    <p className="text-gray-600">
      {renderParagraph(children)}
    </p>
  )
}
