import React, { FC } from 'react';
import { TagStyles } from './TagStyles';

type TagProps = {
  title: string;
};
const Tag: FC<TagProps> = ({ title }) => {
  return <TagStyles>{title}</TagStyles>;
};

export default Tag;
