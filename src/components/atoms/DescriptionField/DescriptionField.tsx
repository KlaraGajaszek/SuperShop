import React, { FC } from 'react'

import { InputError } from './DescriptionFieldStyles'
import { Field, ErrorMessage } from 'formik'

type PropsInput = {
  placeholder: string
  radius: string
  margin?: string
  name: string
  type: string
  width?: string
}

export const DescriptionField: FC<PropsInput> = ({
  name,
  radius,
  placeholder,
}) => {
  return (
    <div>
      <Field
        data-testid="fieldID"
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-5 mb-3"
        type="text"
        id="name"
        name={name}
        as="textarea"
        radius={radius}
        placeholder={placeholder}
        cols="3"
        rows="5"
      />
      <ErrorMessage name={name} component={InputError} />
    </div>
  )
}
