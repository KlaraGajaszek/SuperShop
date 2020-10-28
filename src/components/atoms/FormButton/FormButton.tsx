import React, { FC } from 'react';

import { ButtonWrapper } from './FormButtonStyles';

type PropsButton = {
  content: string;
  bgcolor: string;
  radius: string;
  margin: string;
  type: string;
};

const FormButton: FC<PropsButton> = (props) => {
  return (
    <ButtonWrapper
      bgcolor={props.bgcolor}
      radius={props.radius}
      margin={props.margin}
    >
      {props.content}
    </ButtonWrapper>
  );
};

export default FormButton;
