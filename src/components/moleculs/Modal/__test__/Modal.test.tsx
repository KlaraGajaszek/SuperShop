import React, { createRef } from 'react';
import { screen, render, within } from '@testing-library/react';

import Modal from '../Modal';
import { ModalTitle } from '../ModalStyles';
import userEvent from '@testing-library/user-event';

describe('Modal', () => {
  it('function pass as clsFunction is called when modal closes', () => {
    const mockCallback = jest.fn();
    render(
      <Modal show={true} clsFunction={mockCallback}>
        foo
      </Modal>
    );

    userEvent.click(screen.getByText('X'));
    expect(mockCallback).toHaveBeenCalled();
  });

  it('renders modal content when show is false', () => {
    render(<Modal show={false}>contentTest</Modal>);

    const modal = screen.queryByText('contentTest');
    expect(modal).not.toBeInTheDocument();
  });

  it('renders modal content when show is true', () => {
    render(<Modal show={true}> Test </Modal>);

    const modal = screen.queryByText('Test');
    expect(modal).toBeInTheDocument();
  });

  it('renders modal header', () => {
    render(<Modal show={true} content={'contentTest'}></Modal>);

    const modalHeader = screen.getByTestId('modalTitle');
    expect(modalHeader).toBeInTheDocument();

    const modalHeaderContent = within(modalHeader).queryByText('contentTest');
    expect(modalHeaderContent).toBeInTheDocument();
  });
});
