import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import InputDefault from '../../components/atoms/Input/Input';
import Label from '../../components/atoms/Label/Label';
import FormButton from '../../components/atoms/FormButton/FormButton';
import { FaUserAlt } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { FormWrapper, LabelWrapper } from './LogInFormStyles';

type InitialValue = {
  name: string;
  password: string;
};

const initialValues: InitialValue = {
  name: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  password: Yup.string().required().label('Password'),
});

const LogInForm = () => {
  const onSubmit = (
    values: InitialValue,
    onSubmitProps: FormikHelpers<InitialValue>
  ) => {
    console.log(values);

    // axios({
    //   method: 'post',
    //   url: ``,
    //   data: ,
    // })
    //   .then(function () {
    //     setTimeout(() => {
    //       handleCloseLogInModal();
    //     }, 500);
    //     onSubmitProps.resetForm();
    //   })
    //   .catch(function (response) {
    //     //handle error
    //   });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {(props) => {
        return (
          <Form>
            <FormWrapper>
              <LabelWrapper>
                <Label label={'User Name'} icon={<FaUserAlt />} />
                <InputDefault
                  name="name"
                  placeholder={'name'}
                  radius={'5px'}
                  margin={'5px 0px 15px 0px'}
                  type="input"
                />
              </LabelWrapper>
              <LabelWrapper>
                <Label label={'Password'} icon={<GiPadlock />} />
                <InputDefault
                  name="password"
                  placeholder={'password'}
                  radius={'5px'}
                  margin={'5px 0px 15px 0px'}
                  type="password"
                />
              </LabelWrapper>
              <FormButton
                type="submit"
                content={'Submit'}
                bgcolor={'#F92A70'}
                radius={'5px'}
                margin={'10px 0 0 0 '}
              />
            </FormWrapper>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
