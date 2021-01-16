import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import InputDefault from '../../components/atoms/Input/Input';
import Label from '../../components/atoms/Label/Label';
import FormButton from '../../components/atoms/FormButton/FormButton';
import { FaUserAlt } from 'react-icons/fa';
import { GiPadlock } from 'react-icons/gi';
import { FormWrapper, LabelWrapper, Title } from './LogInFormStyles';

type InitialValue = {
  email: string;
  password: string;
};

const initialValues: InitialValue = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Name'),
  password: Yup.string().required().label('Password'),
});

const LogInForm = () => {
  const onSubmit = (
    values: InitialValue,
    onSubmitProps: FormikHelpers<InitialValue>
  ) => {
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
      return (
      <FormWrapper>
        <FormWrapper>
          <Title>Login</Title>
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
            <Label label={'Password'} icon={<GiPadlock />} color={'black'} />
            <InputDefault
              name="password"
              placeholder={'password'}
              radius={'5px'}
              margin={'15px 0px 15px 0px'}
              type="password"
            />
          </LabelWrapper>
          <FormButton
            onClick={() => {}}
            type="submit"
            content={'Submit'}
            bgcolor={'#F92A70'}
            radius={'5px'}
            margin={'10px 0 15px 0 '}
            width={'120px'}
          />
        </FormWrapper>
      </FormWrapper>
      );
    </Formik>
  );
};

export default LogInForm;
