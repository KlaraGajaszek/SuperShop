import React from 'react';

import { ErrorBoxWrapper } from './ErrorBoxStyles';

type PropsErrorBox = {
  content?: object | any;
  bgcolor: string;
  radius: string;
};

class ErrorBox extends React.Component<PropsErrorBox> {
  render() {
    console.log('errr', typeof this.props.content);
    return (
      <ErrorBoxWrapper bgcolor={this.props.bgcolor} radius={this.props.radius}>
        <div>{this.props.content.name}</div>
        <div>{this.props.content.description}</div>
        <div>{this.props.content.tags}</div>
        <div>{this.props.content.price}</div>
        <div>{this.props.content.image}</div>
      </ErrorBoxWrapper>
    );
  }
}

export default ErrorBox;
