import React from 'react';

import { FormikInput } from './InputStyles';
import { Field } from 'formik';

type PropsInput = {
  placeholder?: string;
  radius?: string;
  margin?: string;
  name: string;
  type: string;
  onChange?: (obj: any) => void;
};

class InputDefault extends React.Component<PropsInput> {
  render() {
    return (
      <Field
        type="text"
        id="name"
        name="name"
        as={FormikInput}
        {...this.props}
      />
    );
  }
}

export default InputDefault;
