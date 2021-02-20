import React, { FC } from 'react';

import { FormikInput, InputError, FieldBox } from './InputStyles';
import { Field, ErrorMessage } from 'formik';

type PropsInput = {
  placeholder: string;
  radius: string;
  margin?: string;
  name: string;
  type: string;
  onChange?: any;
  width?: string;
};

export const CustomInput: any = () => {
  return (
    <input className="appearance-none block w-full bg-grey text-grey-darker border border-grey-lighter rounded py-3 px-4" />
  );
};

export const InputDefault: FC<PropsInput> = ({
  name,
  onChange,
  radius,
  placeholder,
}) => {
  return (
    <FieldBox>
      <Field
        data-testid="fieldID"
        type="text"
        id={name}
        name={name}
        as={CustomInput}
        // onChange={onChange}
        radius={radius}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={InputError} />
    </FieldBox>
  );
};
