import React, { useContext, useRef } from 'react';
import axios from 'axios';
import { Formik, Form, FieldArray, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import InputDefault from '../../components/atoms/Input/Input';
import InputUploatFile from '../../components/atoms/InputUploadFile/InputUploadFile';
import { BoxWrapper, InputsBox, Wrapper, TagWrapper } from './FormPageStyles';
import FormButton from '../../components/atoms/FormButton/FormButton';
import ButtonWithIcon from '../../components/atoms/ButtonwithIcon/ButtonWithIcon';
import { ModelFormContext } from '../../context/ModalFormProductsContext';
import { IoMdAddCircle } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';

type InitialValue = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  price: string;
};

const initialValues: InitialValue = {
  name: '',
  description: '',
  image: '',
  tags: [''],
  price: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  description: Yup.string().required().label('Description'),
  image: Yup.string().label('Image'),
  tags: Yup.string().required().label('Tags'),
  price: Yup.string().required().label('Price'),
});

const FormPage = () => {
  const { handleFormModal } = useContext(ModelFormContext);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onSubmit = (
    values: InitialValue,
    onSubmitProps: FormikHelpers<InitialValue>
  ) => {
    console.log(values);
    let bodyFormData = new FormData();

    bodyFormData.append('name', values.name);
    bodyFormData.append('description', values.description);
    bodyFormData.append('tags', JSON.stringify(values.tags));
    bodyFormData.append('price', values.price);
    bodyFormData.append('image', values.image);

    axios({
      method: 'post',
      url: `https://httpbin.org/post`,
      headers: { 'Content-Type': 'multipart/form-data' },
      data: bodyFormData,
      onUploadProgress: (progressEvent) => {
        console.log(
          'upload event',
          Math.round((progressEvent.loaded / progressEvent.total) * 100)
        );
      },
    })
      .then(function () {
        setTimeout(() => {
          handleFormModal(false);
        }, 500);
        onSubmitProps.resetForm();
      })
      .catch(function (response) {
        //handle error
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={true}
      validateOnBlur={true}
    >
      {(formProps) => {
        return (
          <Form>
            <Wrapper>
              <BoxWrapper>
                <InputsBox>
                  <InputDefault
                    name="name"
                    placeholder={'name'}
                    radius={'5px'}
                    margin={'30px 0px 20px 0px'}
                    type="input"
                  />
                  <InputDefault
                    name="description"
                    placeholder={'description'}
                    radius={'5px'}
                    margin={'0px 0px 20px 0px'}
                    type="input"
                  />
                  <FieldArray
                    name="tags"
                    render={(arrayHelpers) => (
                      <>
                        {arrayHelpers.form.values.tags?.map(
                          (tag: string, index: number) => (
                            <TagWrapper key={index}>
                              <InputDefault
                                name={`tags[${index}]`}
                                placeholder={`tags[${index}]`}
                                radius={'5px'}
                                margin={'0px 100px 20px 0px'}
                                type="input"
                              />
                              <ButtonWithIcon
                                type="button"
                                color={'#F92A70'}
                                width={'35px'}
                                height={'35px'}
                                childComp={IoMdAddCircle}
                                btnFunction={() => arrayHelpers.push('')}
                                disable={false}
                                margin={'0 0 5px 15px'}
                              />
                              <ButtonWithIcon
                                margin={'0 0 5px 0'}
                                width={'41px'}
                                height={'41px'}
                                type="button"
                                childComp={TiDelete}
                                color={
                                  arrayHelpers.form.values.tags.length > 1
                                    ? 'gray'
                                    : '#D3D3D3'
                                }
                                btnFunction={() => arrayHelpers.remove(index)}
                                disable={
                                  arrayHelpers.form.values.tags.length > 1
                                    ? false
                                    : true
                                }
                              />
                            </TagWrapper>
                          )
                        )}
                      </>
                    )}
                  />
                  <InputDefault
                    name="price"
                    placeholder={'price'}
                    radius={'5px'}
                    type="input"
                    margin={'0px 0px 20px 0px'}
                  />
                  <InputUploatFile
                    spanText={inputRef.current?.files?.[0].name}
                    name={'image'}
                    type={'file'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (!e.target.files) {
                        return;
                      }
                      formProps.setFieldValue('image', e.target.files[0]);
                    }}
                  />
                </InputsBox>
              </BoxWrapper>
              <FormButton
                type="button"
                content={'Submit'}
                bgcolor={'#F92A70'}
                radius={'5px'}
                margin={'0px auto 20px'}
                btnFunction={() => {}}
                width={'150px'}
              />
            </Wrapper>
          </Form>
        );
      }}
    </Formik>
  );
};
export default FormPage;
