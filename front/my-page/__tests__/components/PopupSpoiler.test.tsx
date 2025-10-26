import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import PopupSpoiler from '@/components/PopupSpoiler' // adjust import to your path

describe('PopupSpoiler', () => {
  const TITLE = 'Open Menu'
  const CONTENT = 'Secret content'

  it('is closed by default and opens on trigger click', () => {
    render(
      <PopupSpoiler title={<span>{TITLE}</span>}>
        <div>{CONTENT}</div>
      </PopupSpoiler>
    )

    // closed by default
    expect(screen.queryByText(CONTENT)).not.toBeInTheDocument()

    // open
    fireEvent.click(screen.getByRole('button', { name: TITLE }))
    expect(screen.getByText(CONTENT)).toBeInTheDocument()
  })

  it('closes when clicking outside (mousedown on document/body)', () => {
    render(
      <PopupSpoiler title={<span>{TITLE}</span>}>
        <div>{CONTENT}</div>
      </PopupSpoiler>
    )

    // open first
    fireEvent.click(screen.getByRole('button', { name: TITLE }))
    expect(screen.getByText(CONTENT)).toBeInTheDocument()

    // outside click
    fireEvent.mouseDown(document.body)
    expect(screen.queryByText(CONTENT)).not.toBeInTheDocument()
  })

  it('does NOT close when clicking inside the popup content', () => {
    render(
      <PopupSpoiler title={<span>{TITLE}</span>}>
        <button>{CONTENT}</button>
      </PopupSpoiler>
    )

    // open
    fireEvent.click(screen.getByRole('button', { name: TITLE }))
    const insideBtn = screen.getByRole('button', { name: CONTENT })
    expect(insideBtn).toBeInTheDocument()

    // click inside content
    fireEvent.mouseDown(insideBtn)
    expect(screen.getByRole('button', { name: CONTENT })).toBeInTheDocument()
  })

  it('adds mousedown listener on mount and removes it on unmount (covers lines 24–25)', () => {
    const addSpy = vi.spyOn(document, 'addEventListener')
    const removeSpy = vi.spyOn(document, 'removeEventListener')

    const { unmount } = render(
      <PopupSpoiler title={<span>{TITLE}</span>}>
        <div>{CONTENT}</div>
      </PopupSpoiler>
    )

    // added with a function handler
    expect(addSpy).toHaveBeenCalledWith('mousedown', expect.any(Function))
    const mousedownAddCall = addSpy.mock.calls.find(c => c[0] === 'mousedown')
    const addedHandler = mousedownAddCall?.[1] as EventListener | undefined
    expect(typeof addedHandler).toBe('function')

    // unmount -> removed with the very same handler
    unmount()
    const removedWithSameHandler = removeSpy.mock.calls.some(
      c => c[0] === 'mousedown' && c[1] === addedHandler
    )
    expect(removedWithSameHandler).toBe(true)

    addSpy.mockRestore()
    removeSpy.mockRestore()
  })
})