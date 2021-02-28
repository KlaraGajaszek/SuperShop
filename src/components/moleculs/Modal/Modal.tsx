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
  onClick?: () => void;
  buttonTitle: string;
};

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  onClick,
  content,
  buttonTitle,
}) => {
  return (
    <>
      {isOpen === true && (
        <div
          className="fixed inset-0 m-auto shadow-md rounded px-8 pb-8 mb-4 flex flex-col my-2 h-full z-20 bg-black bg-opacity-50 duration-300 overflow-y-auto"
          x-show="showModal1"
          test-id="modalTitle"
        >
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <ModalContent>
              <CloseButton onClick={onClose} data-testid="closeButton">
                <CloseIcon />
              </CloseButton>
              <ModalTitle className="mb-5" data-testid="modalTitle">
                {content}
              </ModalTitle>
              {children}
              <footer className="flex justify-end p-2">
                <FormButton content={buttonTitle} />
              </footer>
            </ModalContent>
          </div>
        </div>
      )}
    </>
  );
};
