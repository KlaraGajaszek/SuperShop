import React, { FC } from 'react';

import {
  ModalBox,
  ModalContent,
  CloseButton,
  ModalTitle,
  CloseIcon,
  ModalFooter,
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
  console.log('modal');
  return (
    <>
      {isOpen === true && (
        <ModalBox test-id="modalTitle">
          <ModalContent>
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
            <ModalTitle data-testid="modalTitle">{content}</ModalTitle>
            {children}
            <ModalFooter>
              <FormButton
                type="button"
                width={'120px'}
                onClick={onClick}
                color="#4C4C4C"
                content="ADD PRODUCT"
                bgcolor="#FFFF"
                radius="5px"
              />
            </ModalFooter>
          </ModalContent>
        </ModalBox>
      )}
    </>
  );
};
