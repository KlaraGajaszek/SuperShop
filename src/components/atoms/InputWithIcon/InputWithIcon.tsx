import React from 'react';

import { Field } from 'formik';

type PropsInput = {
  placeholder?: string;
  radius?: string;
  margin?: string;
  name: string;
  type: string;
};

class InputWithIcon extends React.Component<PropsInput> {
  render() {
    return <Field type="text" id="name" name="name" {...this.props} />;
  }
}

export default InputWithIcon;
