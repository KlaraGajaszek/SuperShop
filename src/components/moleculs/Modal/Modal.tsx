import React, { FC } from 'react'

import {
  ModalContent,
  CloseButton,
  ModalTitle,
  CloseIcon,
  Header,
} from './ModalStyles'

type ModalProps = {
  onClose: () => void
  content: string
}

export const Modal: FC<ModalProps> = ({ children, onClose, content }) => {
  console.log('modal')
  return (
    <div
      className="fixed inset-0 shadow-md py-12 flex flex-col z-20 bg-black bg-opacity-50"
      x-show="showModal1"
      test-id="modalTitle"
    >
      <div className="md:flex mb-6">
        <ModalContent data-testid="modalId">
          <Header>
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
            <ModalTitle data-testid="modalTitle">{content}</ModalTitle>
          </Header>
          {children}
        </ModalContent>
      </div>
    </div>
  )
}
