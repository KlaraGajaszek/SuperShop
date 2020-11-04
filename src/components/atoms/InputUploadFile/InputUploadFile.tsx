import React, { FC, ForwardRefRenderFunction, useRef } from 'react';
import { TestDIV, Test2 } from './InputUploadFileStyles';

type PropsInput = {
  spanText: string | undefined;
  name: string;
  type: string;
  // ref: RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputUploatFile: FC<PropsInput> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement | null>(ref);
  return (
    <>
      <TestDIV>
        <span>
          {props.spanText !== undefined ? 'Change File' : 'Choose File'}
        </span>
        <Test2
          name={props.name}
          type={props.type}
          ref={inputRef}
          onChange={(e) => {
            props.onChange(e);
          }}
        />
      </TestDIV>
      <p>{inputRef.current?.files?.[0].name}</p>
    </>
  );
};

export default InputUploatFile;
