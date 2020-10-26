import React, { FC } from 'react';
import { ModalBox } from './ModalStyles';

type ModalProps = {
  content?: string;
  show: boolean;
};

const Modal: FC<ModalProps> = (props) => {
  return (
    <>
      {props.show ? (
        <ModalBox>
          <p>{props.content}</p>
          {props.children}
        </ModalBox>
      ) : (
        ''
      )}
    </>
  );
};

export default Modal;
