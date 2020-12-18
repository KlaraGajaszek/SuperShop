import React from 'react';

import { FormikInput, InputError, FieldBox } from './InputStyles';
import { Field, ErrorMessage } from 'formik';

type PropsInput = {
  placeholder?: string;
  radius?: string;
  margin?: string;
  name?: string;
  type?: string;
  onChange?: (obj: any) => void;
  width?: string;
};

class InputDefault extends React.Component<PropsInput> {
  render() {
    return (
      <FieldBox>
        <Field
          type="text"
          id="name"
          name="name"
          as={FormikInput}
          {...this.props}
        />
        {/* <ErrorMessage name={this.props.name} component={InputError} /> */}
      </FieldBox>
    );
  }
}

export default InputDefault;
