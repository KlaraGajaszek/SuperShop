import React from 'react';
import { screen, render, within } from '@testing-library/react';
import InputWithIcon from '../InputWithIcon';
import { Formik } from 'formik';

describe('input with icon', () => {
  it('input test', () => {
    const fieldName = 'firstName';

    const { getByTestId } = render(
      <Formik>
        <InputWithIcon fieldName={fieldName} />
      </Formik>
    );
  });
});
