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
        as={FormikInput}
        // onChange={onChange}
        radius={radius}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={InputError} />
    </FieldBox>
  );
};
