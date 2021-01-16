import React, { FC } from 'react';

import { TestIcon, Button } from './ButtonWithIconStyles';

type PropsButtonWithIcon = {
  disable: boolean;
  type: string;
  width: string;
  height: string;
  onClick: () => void;
  color: string;
  childComp: any;
  margin: string;
};

// zmienić btnFunction na onClick, TestIcon
const ButtonWithIcon: FC<PropsButtonWithIcon> = ({
  disable = false,
  ...props
}) => {
  return (
    <Button
      disabled={disable}
      onClick={props.onClick}
      margin={props.margin}
      data-testid="buttonId"
    >
      <TestIcon
        as={props.childComp}
        width={props.width}
        height={props.height}
        color={props.color}
        data-testid="buttonIcon"
      />
    </Button>
  );
};

export default ButtonWithIcon;
