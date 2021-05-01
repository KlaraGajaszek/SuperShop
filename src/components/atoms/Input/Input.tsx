import React, { FC } from 'react'

import { InputError, FieldBox } from './InputStyles'
import { Field, ErrorMessage } from 'formik'

type PropsInput = {
  placeholder: string
  radius: string
  margin?: string
  name: string
  type: string
  width?: string
}

export const InputDefault: FC<PropsInput> = ({ name, radius, placeholder }) => {
  return (
    <FieldBox>
      <Field
        className="appearance-none block w-full bg-grey text-grey-darker border border-grey-lighter rounded py-3 px-4"
        data-testid="fieldID"
        type="text"
        id={name}
        name={name}
        radius={radius}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} component={InputError} />
    </FieldBox>
  )
}
