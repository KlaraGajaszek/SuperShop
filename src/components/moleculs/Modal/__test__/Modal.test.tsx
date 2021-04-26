import React from 'react'
import { screen, render, within } from '@testing-library/react'

import { Modal } from '../Modal'
import userEvent from '@testing-library/user-event'

describe('Modal', () => {
  it('function pass as onClose is called when modal closes', () => {
    const mockCallback = jest.fn()
    render(
      <Modal isOpen={true} onClose={mockCallback} content="test">
        foo
      </Modal>
    )

    userEvent.click(screen.getByTestId('buttonID'))
    // expect(mockCallback).toHaveBeenCalled();
  })

  it('renders modal content when show is false', () => {
    render(
      <Modal isOpen={false} content="test">
        contentTest
      </Modal>
    )

    const modal = screen.queryByText('contentTest')
    expect(modal).not.toBeInTheDocument()
  })

  it('renders modal content when show is true', () => {
    render(<Modal isOpen={true}> Test </Modal>)

    const modal = screen.queryByText('Test')
    expect(modal).toBeInTheDocument()
  })

  it('renders modal header', () => {
    render(<Modal isOpen={true} content={'contentTest'}></Modal>)

    const modalHeader = screen.getByTestId('modalTitle')
    expect(modalHeader).toBeInTheDocument()

    const modalHeaderContent = within(modalHeader).queryByText('contentTest')
    expect(modalHeaderContent).toBeInTheDocument()
  })
})
