import React, { FC } from 'react'

import { Icon, Button } from './ButtonWithIconStyles'

type PropsButtonWithIcon = {
  disable: boolean
  width: string
  height: string
  onClick: () => void
  color: string
  icon: any
  margin: string
}

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
      <Icon
        as={props.icon}
        width={props.width}
        height={props.height}
        color={props.color}
        data-testid="buttonIcon"
      />
    </Button>
  )
}

export default ButtonWithIcon
