import React, { FC } from 'react';

import { ButtonWrapper } from './FormButtonStyles';

type PropsButton = {
  content: string;
  bgcolor: string;
  radius: string;
  margin?: string;
  type: string;
  width: string;
  onClick: any;
  color: string;
};

export const FormButton: FC<PropsButton> = ({
  bgcolor,
  radius,
  margin = '0px',
  width,
  onClick,
  content,
  color,
}) => {
  return (
    <ButtonWrapper
      data-testid="buttonID"
      bgcolor={bgcolor}
      radius={radius}
      margin={margin}
      width={width}
      onClick={onClick}
      color={color}
    >
      {content}
    </ButtonWrapper>
  );
};
