import React, { FC } from 'react';
import { ContentWrapper, Title } from './ContentStyle';

type PropsContent = {
  description: string;
  name: string;
};

const Content: FC<PropsContent> = ({ name, description }) => {
  return (
    <ContentWrapper>
      <Title>{name}</Title>
      <span>{description}</span>
    </ContentWrapper>
  );
};

export default Content;
