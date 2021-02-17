import React, { FC } from 'react';

type PropsButton = {
  content: string;
  type: string;
  onClick: any;
};

export const FormButton: FC<PropsButton> = ({ type, onClick, content }) => {
  return (
    <button
      data-testid="buttonID"
      onClick={onClick}
      className="bg-black font-semibold text-white p-2 w-32 rounded-full hover:bg-indigo-50 hover:text-black focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300"
    >
      {content}
    </button>
  );
};
