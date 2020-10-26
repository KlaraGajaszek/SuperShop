import React, { FC } from 'react';
import { ModalBox, ModalContent, CloseButton } from './ModalStyles';

type ModalProps = {
  content?: string;
  show: boolean;
  clsFunction: () => void;
};

const Modal: FC<ModalProps> = (props) => {
  return (
    <>
      {props.show ? (
        <ModalBox>
          <ModalContent>
            <CloseButton onClick={() => props.clsFunction()}>X</CloseButton>
            <p>{props.content}</p>
            {props.children}
          </ModalContent>
        </ModalBox>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
