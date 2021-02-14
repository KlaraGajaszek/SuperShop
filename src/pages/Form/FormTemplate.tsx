import React from 'react';
import { useFormikContext } from 'formik';

import {
  Form,
  LeftContentForm,
  RightContentForm,
  SubTitleForm,
} from './FormTemplateStyles';
import { InputDefault } from '../../components/atoms/Input/Input';
import { DescriptionField } from '../../components/atoms/DescriptionField/DescriptionField';
import { FileUpload } from '../../components/atoms/FileUpload/FileUpload';

export const FormTemplate = () => {
  const updateUploadedFiles = (files: any) => console.log(files);
  // const formik: any = useFormikContext();

  return (
    <Form>
      <SubTitleForm>
        <LeftContentForm>Activation</LeftContentForm>
        <RightContentForm>User Name</RightContentForm>
      </SubTitleForm>
      <SubTitleForm>
        <LeftContentForm>Product Name</LeftContentForm>
        <RightContentForm>
          <InputDefault
            type="text"
            name="name"
            // onChange={(name: string, value: string) =>
            //   formik.setFieldValue(name, value)
            // }
            radius="5px"
            placeholder="Product Name"
          />
        </RightContentForm>
      </SubTitleForm>
      <SubTitleForm>
        <LeftContentForm>Product Description</LeftContentForm>
        <RightContentForm>
          <DescriptionField
            type="area"
            name="description"
            // onChange={(name: string, value: string) =>
            //   formik.setFieldValue(name, value)
            // }
            radius="5px"
            placeholder="Product Description"
          />
        </RightContentForm>
      </SubTitleForm>
      <SubTitleForm>
        <LeftContentForm>Product Image</LeftContentForm>
        <RightContentForm>
          <FileUpload
            accept=".jpg,.png,.jpeg"
            label=""
            multiple
            updateFilesCb={updateUploadedFiles}
          />
        </RightContentForm>
      </SubTitleForm>
    </Form>
  );
};