import React from 'react';

import { ButtonWrapper } from './FormButtonStyles';

type PropsButton = {
  content: string;
  bgcolor: string;
  onClick?: () => void;
  radius: string;
  margin: string;
  type: string;
};

class FormButton extends React.Component<PropsButton> {
  render() {
    return (
      <ButtonWrapper
        bgcolor={this.props.bgcolor}
        radius={this.props.radius}
        margin={this.props.margin}
      >
        {this.props.content}
      </ButtonWrapper>
    );
  }
}

export default FormButton;
