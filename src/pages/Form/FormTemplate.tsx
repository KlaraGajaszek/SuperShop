import React, { useState } from 'react';
import { FieldArray } from 'formik';

import { Form } from './FormTemplateStyles';
import { InputDefault } from '../../components/atoms/Input/Input';
import { DescriptionField } from '../../components/atoms/DescriptionField/DescriptionField';
import { FileUpload } from '../../components/atoms/FileUpload/FileUpload';
import { BiPlus } from 'react-icons/bi';
import ButtonWithIcon from '../../components/atoms/ButtonwithIcon/ButtonWithIcon';
import { AiOutlineMinus } from 'react-icons/ai';

export const FormTemplate = () => {
  const [files, setFiles] = useState<any>([]);

  return (
    <Form className="px-8">
      <div className=" flex-none md:flex justify-around ">
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
            name="price"
            radius="5px"
            placeholder="Price"
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
      <div className="mt-5">
        <label className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2 ">
          Add images
        </label>
        <FileUpload
          GetFiles={(file) => setFiles([...files, file])}
          className="mb-5"
        />
      </div>
      <label className="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2 ">
        Add product tags
      </label>
      <FieldArray
        name="tags"
        render={(arrayHelpers) => (
          <div>
            {arrayHelpers.form.values?.tags.map(
              (tag: string, index: number) => (
                <div key={index}>
                  <InputDefault
                    type="text"
                    name={`tags.${index}`}
                    radius="5px"
                    placeholder={`Tag nr.${index}`}
                  />
                  <div className="mt-1 mb-2">
                    <ButtonWithIcon
                      width="30px"
                      type="button"
                      height="30px"
                      color="#FFFF"
                      disable={false}
                      styles="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 duration-150 bg-black rounded-lg focus:shadow-outline hover:bg-indigo-800"
                      childComp={BiPlus}
                      onClick={() => arrayHelpers.insert(index, '')}
                    />
                    <ButtonWithIcon
                      width="30px"
                      type="button"
                      height="30px"
                      color="#FFFF"
                      disable={false}
                      styles="inline-flex items-center justify-center w-10 h-10 mr-2 text-indigo-100 duration-150 rounded-lg focus:shadow-outline hover:bg-indigo-800"
                      childComp={AiOutlineMinus}
                      onClick={() => arrayHelpers.remove(index)}
                    />
                  </div>
                </div>
              )
            )}
          </div>
        )}
      />
    </Form>
  );
};
