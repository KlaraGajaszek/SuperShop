import React from 'react';

import { ContentWrapper, Title, Description } from './ContentStyle';

type PropsContent = {
  description: string;
  name: string;
};

class Content extends React.Component<PropsContent> {
  render() {
    const { name, description } = this.props;
    return (
      <ContentWrapper>
        <Title>{name}</Title>
        <Description>{description}</Description>
      </ContentWrapper>
    );
  }
}

export default Content;
