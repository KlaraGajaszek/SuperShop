import React, { FC } from 'react';

type TagProps = {
  title: string;
};

const Tag: FC<TagProps> = ({ title }) => {
  return (
    <div className="bg-blue-200 rounded-md p-2" data-testid="tag">
      {title}
    </div>
  );
};

export default Tag;
