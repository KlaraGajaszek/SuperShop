import React, { FC } from 'react';

import {
  ModalContent,
  CloseButton,
  ModalTitle,
  CloseIcon,
} from './ModalStyles';
import { FormButton } from '../../atoms/FormButton/FormButton';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: string;
  onClick: () => void;
};

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  onClick,
  content,
}) => {
  return (
    <>
      {isOpen === true && (
        <div
          className="fixed inset-0 w-full h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto"
          x-show="showModal1"
          test-id="modalTitle"
        >
          <div className="relative sm:w-3/4 md:w-1/2 lg:w-1/3 mx-2 sm:mx-auto my-10 opacity-100">
            <div
              className="relative bg-white shadow-lg rounded-md text-gray-900 z-20"
              x-show="showModal1"
            >
              <ModalContent>
                <CloseButton onClick={onClose}>
                  <CloseIcon />
                </CloseButton>
                <ModalTitle className="mb-5" data-testid="modalTitle">
                  {content}
                </ModalTitle>
                {children}
                <footer className="flex justify-end p-2">
                  <FormButton
                    type="button"
                    onClick={onClick}
                    content="ADD PRODUCT"
                  />
                </footer>
              </ModalContent>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
