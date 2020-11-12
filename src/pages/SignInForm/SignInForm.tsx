import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import InputDefault from '../../components/atoms/Input/Input';
import Label from '../../components/atoms/Label/Label';
import FormButton from '../../components/atoms/FormButton/FormButton';
import { FaUserAlt } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { FormWrapper, LabelWrapper, Title } from './SignInFormStyles';

type InitialValue = {
  email: string;
  password: string;
};

const initialValues: InitialValue = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().label('Password'),
});

const SignInForm = () => {
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
              <Title>Sign in</Title>
              <LabelWrapper>
                <Label label={'Email'} icon={<FaUserAlt />} color={'black'} />
                <InputDefault
                  name="email"
                  placeholder={'email'}
                  radius={'5px'}
                  margin={'15px 0px 15px 0px'}
                  type="input"
                />
              </LabelWrapper>
              <LabelWrapper>
                <Label
                  label={'Password'}
                  icon={<GiPadlock />}
                  color={'black'}
                />
                <InputDefault
                  name="password"
                  placeholder={'password'}
                  radius={'5px'}
                  margin={'15px 0px 15px 0px'}
                  type="password"
                />
              </LabelWrapper>
              <FormButton
                btnFunction={() => {}}
                type="submit"
                content={'Submit'}
                bgcolor={'#F92A70'}
                width={'120px'}
                radius={'5px'}
                margin={'10px 0 15px 0 '}
              />
            </FormWrapper>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignInForm;
