import React, { FC } from 'react';

import { ButtonWithIconStyles } from './ButtonWithIconStyles';

type PropsButtonWithIcon = {
  radius: string;
  margin: string;
  type: string;
  disable: boolean;
  width: string;
  height: string;
  btnFunction: () => void;
  childComp?: React.ReactNode;
};

const ButtonWithIcon: FC<PropsButtonWithIcon> = (props) => {
  return (
    <ButtonWithIconStyles
      radius={props.radius}
      disabled={props.disable}
      margin={props.margin}
      onClick={() => props.btnFunction()}
      width={props.width}
      height={props.height}
    >
      {props.childComp}
    </ButtonWithIconStyles>
  );
};

export default ButtonWithIcon;
