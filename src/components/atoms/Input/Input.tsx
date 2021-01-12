import React, { FC } from 'react';

import { FormikInput, InputError, FieldBox } from './InputStyles';
import { Field, ErrorMessage } from 'formik';

type PropsInput = {
  placeholder?: string;
  radius?: string;
  margin?: string;
  name: string;
  type: string;
  onChange?: (obj: any) => void;
  width?: string;
};

const InputDefault: FC<PropsInput> = ({ name, onChange }) => {
  return (
    <FieldBox>
      <Field
        data-testid="fieldID"
        type="text"
        id="name"
        name={name}
        as={FormikInput}
        onChange={onChange}
      />
      <ErrorMessage name={name} component={InputError} />
    </FieldBox>
  );
};

export default InputDefault;
