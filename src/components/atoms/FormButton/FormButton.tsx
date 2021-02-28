import React, { FC } from 'react';

type PropsButton = {
  content: string;
};

export const FormButton: FC<PropsButton> = ({ content }) => {
  return (
    <button
      data-testid="buttonID"
      type="submit"
      className="bg-black font-semibold text-white p-2 w-32 rounded-lg focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
    >
      {content}
    </button>
  );
};
