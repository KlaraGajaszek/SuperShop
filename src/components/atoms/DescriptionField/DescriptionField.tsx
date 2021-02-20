import React, { FC } from 'react';

import { InputError, FieldBox } from './DescriptionFieldStyles';
import { Field, ErrorMessage } from 'formik';

type PropsInput = {
  placeholder: string;
  radius: string;
  margin?: string;
  name: string;
  type: string;
  width?: string;
};

export const CustomInput: any = () => {
  return (
    <textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3  mb-3" />
  );
};

export const DescriptionField: FC<PropsInput> = ({
  name,
  radius,
  placeholder,
}) => {
  return (
    <div>
      <Field
        data-testid="fieldID"
        type="text"
        id="name"
        name={name}
        as={CustomInput}
        radius={radius}
        placeholder={placeholder}
        cols="300"
        rows="500"
      />
      <ErrorMessage name={name} component={InputError} />
    </div>
  );
};
