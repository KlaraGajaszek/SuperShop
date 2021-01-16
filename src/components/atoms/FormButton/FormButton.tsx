import React, { FC } from 'react';

import { ButtonWrapper } from './FormButtonStyles';

type PropsButton = {
  content: string;
  bgcolor: string;
  radius: string;
  margin: string;
  type: string;
  width: string;
  onClick: () => void;
};

const FormButton: FC<PropsButton> = (props) => {
  return (
    <ButtonWrapper
      data-testid="buttonID"
      bgcolor={props.bgcolor}
      radius={props.radius}
      margin={props.margin}
      width={props.width}
      onClick={props.onClick}
    >
      {props.content}
    </ButtonWrapper>
  );
};

export default FormButton;
