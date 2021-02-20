import React, { FC } from 'react';

type PropsButton = {
  content: string;
};

export const FormButton: FC<PropsButton> = ({ content }) => {
  return (
    <button
      data-testid="buttonID"
      type="submit"
      className="rounded-md bg-black text-yellow-100 font-semibold  focus:outline-none p-3 shadow-lg "
    >
      {content}
    </button>
  );
};
