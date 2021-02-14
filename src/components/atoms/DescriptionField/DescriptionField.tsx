import React, { FC } from 'react';

import { FormikInput, InputError, FieldBox } from './DescriptionFieldStyles';
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

export const DescriptionField: FC<PropsInput> = ({
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
        id="name"
        name={name}
        as={FormikInput}
        onChange={onChange}
        radius={radius}
        placeholder={placeholder}
        cols="300"
        rows="500"
      />
      <ErrorMessage name={name} component={InputError} />
    </FieldBox>
  );
};
