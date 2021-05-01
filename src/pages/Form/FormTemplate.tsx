import React, { useRef, useEffect } from 'react'
import { useFormikContext } from 'formik'

import { Form } from './FormTemplateStyles'
import { InputDefault } from '../../components/atoms/Input/Input'
import { DescriptionField } from '../../components/atoms/DescriptionField/DescriptionField'
import { FileUpload } from '../../components/atoms/FileUpload/FileUpload'
import { Button } from '../../components/atoms/FormButton/Button'

export const FormTemplate = ({ fileRef }: any) => {
  const { values, submitForm } = useFormikContext()
  const productImageRef = useRef<any>()

  React.useEffect(() => {
    // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
    console.log('DUPA')
  }, [submitForm])

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
            name="price"
            radius="5px"
            placeholder="Product Price"
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
      <div className="mb-5">
        <FileUpload fileRef={fileRef} />
      </div>

      <div className="static mb-5 mr-0">
        <Button
          bgColor="black"
          textColor="white"
          size="small"
          content="Submit"
          onClick={submitForm}
        />
      </div>
    </Form>
  )
}
