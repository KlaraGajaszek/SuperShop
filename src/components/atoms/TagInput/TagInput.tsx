import React from 'react';

import { FormikInput } from './TagInputStyles';
import { Field } from 'formik';

type PropsInput = {
  placeholder?: string;
  radius?: string;
  margin?: string;
  name: string;
  type: string;
  onChange?: (obj: any) => void;
  width?: string;
};

class TagInput extends React.Component<PropsInput> {
  render() {
    return (
      <>
        <Field
          type="text"
          id="name"
          name="name"
          as={FormikInput}
          {...this.props}
        />
      </>
    );
  }
}

export default TagInput;
