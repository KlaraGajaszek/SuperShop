import React, { FC } from 'react';

import { LabelTitle, LabelBox, LabelIcon } from './LabelStyles';

type LapelProps = {
  label: string;
  icon?: React.ReactNode;
  color: string;
};

const Label: FC<LapelProps> = ({ icon, label, color }) => {
  return (
    <LabelBox data-testid="labelID">
      <LabelIcon data-testid="labelIconID"> {icon}</LabelIcon>
      <LabelTitle data-testid="labelTitleID" color={color}>
        {label}
      </LabelTitle>
    </LabelBox>
  );
};

export default Label;
