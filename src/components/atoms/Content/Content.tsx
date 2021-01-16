import React, { FC } from 'react';

import { ContentWrapper, Title, Description } from './ContentStyle';

type PropsContent = {
  description: string;
  name: string;
};
const Content: FC<PropsContent> = ({ name, description }) => {
  return (
    <ContentWrapper data-testid="contentId">
      <Title>{name}</Title>
      <Description data-testid="contentDescriptionId">
        {description}
      </Description>
    </ContentWrapper>
  );
};

export default Content;
