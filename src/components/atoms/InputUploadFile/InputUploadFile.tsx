import React, { FC, forwardRef, useRef } from 'react';
import {
  InputUploadWrapper,
  Input,
  Test,
  FileTitle,
  FileIcon,
} from './InputUploadFileStyles';

type PropsInput = {
  spanText: string | undefined;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputUploatFile: FC<PropsInput> = forwardRef((props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <>
      <InputUploadWrapper>
        <Input
          name={props.name}
          type={props.type}
          ref={inputRef}
          onChange={(e) => {
            props.onChange(e);
          }}
        />

        <Test>
          <FileIcon />
          <div>
            <FileTitle>
              {props.spanText !== undefined
                ? 'Change File'
                : 'Choose Your Photo'}
            </FileTitle>
          </div>
        </Test>
      </InputUploadWrapper>
      <FileTitle>{inputRef.current?.files?.[0]?.name}</FileTitle>
    </>
  );
});

export default InputUploatFile;
