import React, { FC } from 'react';

import { TestIcon, Button } from './ButtonWithIconStyles';

type PropsButtonWithIcon = {
  disable: boolean;
  type: string;
  width: string;
  height: string;
  btnFunction: () => void;
  color: string;
  childComp: any;
  margin: string;
};

const ButtonWithIcon: FC<PropsButtonWithIcon> = (props) => {
  return (
    <Button
      disabled={props.disable}
      onClick={() => props.btnFunction()}
      margin={props.margin}
    >
      <TestIcon
        as={props.childComp}
        width={props.width}
        height={props.height}
        color={props.color}
      />
    </Button>
  );
};

export default ButtonWithIcon;
