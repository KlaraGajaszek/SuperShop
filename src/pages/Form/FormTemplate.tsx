import React, { useState } from 'react';
import { useFormikContext } from 'formik';

import { Form } from './FormTemplateStyles';
import { InputDefault } from '../../components/atoms/Input/Input';
import { DescriptionField } from '../../components/atoms/DescriptionField/DescriptionField';
import { FileUpload } from '../../components/atoms/FileUpload/FileUpload';

export const FormTemplate = () => {
  const [files, setFiles] = useState<any>([]);

  return (
    <Form className="px-8">
      <div className=" flex flex-row  justify-around ">
        <div className="mr-5 mb-5">
          <label className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2">
            Product Name
          </label>
          <InputDefault
            type="text"
            name="name"
            radius="5px"
            placeholder="Product Name"
          />
        </div>
        <div>
          <label className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2">
            Price
          </label>
          <InputDefault
            type="text"
            name="name"
            radius="5px"
            placeholder="Product Name"
          />
        </div>
      </div>
      <div className="md:w-1/1 ">
        <label className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2">
          Product Description
        </label>
        <DescriptionField
          type="area"
          name="description"
          radius="5px"
          placeholder="Product Description"
        />
      </div>
      <label className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2">
        Add images
      </label>
      <FileUpload GetFiles={(file) => setFiles([...files, file])} />
    </Form>
  );
};
