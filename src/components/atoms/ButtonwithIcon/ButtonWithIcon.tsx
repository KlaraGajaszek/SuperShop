import React from 'react';

import { ButtonWithIconStyles } from './ButtonWithIconStyles';

type PropsButtonWithIcon = {
  bgcolor: string;
  radius: string;
  margin: string;
  content: string;
  type: string;
  disable: boolean;
  btnFunction: () => void;
};

const ButtonWithIcon = ({
  bgcolor,
  radius,
  margin,
  content,
  disable,
  btnFunction = () => {},
}: PropsButtonWithIcon) => {
  return (
    <ButtonWithIconStyles
      radius={radius}
      disabled={disable}
      margin={margin}
      bgcolor={bgcolor}
      onClick={() => btnFunction()}
    >
      {content}
    </ButtonWithIconStyles>
  );
};

export default ButtonWithIcon;
