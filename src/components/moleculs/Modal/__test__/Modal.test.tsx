import React from 'react'
import { screen, render } from '@testing-library/react'

import { Modal } from '../Modal'

describe('Modal', () => {
  it('render without crash', () => {
    const mockCallback = jest.fn()
    render(
      <Modal onClose={mockCallback} content="test">
        <div>Content</div>
      </Modal>
    )
    const modal = screen.getByTestId('modalId')

    expect(modal).toBeInTheDocument()
  })
})
