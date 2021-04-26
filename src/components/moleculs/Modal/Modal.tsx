import React, { FC } from 'react'

import { ModalContent, CloseButton, ModalTitle, CloseIcon } from './ModalStyles'
import { FormButton } from '../../atoms/FormButton/FormButton'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  content: string
  onSubmit: string
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  content,
  onSubmit,
}) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 w-full shadow-md rounded px-8 pb-8 mb-4 flex flex-col my-2 h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto"
          x-show="showModal1"
          test-id="modalTitle"
        >
          <div className="md:flex mb-6">
            <ModalContent>
              <CloseButton onClick={onClose}>
                <CloseIcon />
              </CloseButton>
              <ModalTitle className="mb-5" data-testid="modalTitle">
                {content}
              </ModalTitle>
              {children}
              <footer className="flex justify-end p-2">
                <FormButton content={onSubmit} />
              </footer>
            </ModalContent>
          </div>
        </div>
      )}
    </>
  )
}
