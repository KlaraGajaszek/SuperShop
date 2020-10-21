import React from 'react';

import { ContentWrapper, Title } from './ContentStyle';

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
        <span>{description}</span>
      </ContentWrapper>
    );
  }
}

export default Content;
