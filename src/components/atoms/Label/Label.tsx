import React from 'react';

import { LabelTitle, LabelBox, LabelIcon } from './LabelStyles';

type LapelProps = {
  label: string;
  icon?: React.ReactNode;
  color: string;
};

class Label extends React.Component<LapelProps> {
  render() {
    return (
      <LabelBox>
        <LabelIcon> {this.props.icon}</LabelIcon>
        <LabelTitle color={this.props.color}>{this.props.label}</LabelTitle>
      </LabelBox>
    );
  }
}

export default Label;
