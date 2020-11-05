import React from 'react';

import { Field } from 'formik';
import FormikInput from './InputWithIconStyles';

type PropsInput = {
  placeholder?: string;
  radius?: string;
  margin?: string;
};

class InputWithIcon extends React.Component<PropsInput> {
  render() {
    return (
      <Field
        type="text"
        id="name"
        name="name"
        as={FormikInput}
        {...this.props}
      ></Field>
    );
  }
}

export default InputWithIcon;
