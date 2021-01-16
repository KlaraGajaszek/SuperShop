import React, { FC } from 'react';

import { TagStyles } from './TagStyles';

type TagProps = {
  title: string;
};

const Tag: FC<TagProps> = ({ title }) => {
  return <TagStyles data-testid="tag">{title}</TagStyles>;
};

export default Tag;
