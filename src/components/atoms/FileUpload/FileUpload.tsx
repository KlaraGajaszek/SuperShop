import React, { FC, useState } from 'react';

type FileUploadPropsType = {
  GetFiles: (file: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
};

export const FileUpload: FC<FileUploadPropsType> = ({
  GetFiles,
  className,
}) => {
  const [highlighted, setHighlighted] = useState<boolean>(false);

  const onDragEnter = () => {
    setHighlighted(true);
  };

  const onDragLeave = () => {
    setHighlighted(false);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setHighlighted(false);
    Array.from(e.dataTransfer.files)
      .filter((file: any) => {
        return (
          file.type === 'image/png' ||
          file.type === 'image/jpg' ||
          file.type === 'image/jpeg'
        );
      })
      .forEach((file: any) => GetFiles(file));
  };

  return (
    <>
      <div
        className={`cursor-pointer appearance-none block w-full bg-grey text-grey-darker border border-grey-lighter rounded py-3 px- ${className} ${
          highlighted ? 'border-green-600 bg-green-100' : 'bg-grey'
        }`}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
          onDragOver(e);
        }}
        onDrop={(e) => onDrop(e)}
      >
        DRAG AND DROP YOUR PHOTO
      </div>
    </>
  );
};
