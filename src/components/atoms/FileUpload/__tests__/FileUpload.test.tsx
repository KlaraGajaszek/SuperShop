import React from 'react'
import { screen, render, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'

import { FileUpload } from '../FileUpload'

describe('Content', () => {
  it('render without crash', () => {
    render(<FileUpload />)

    const content = screen.getByTestId('file-uploader')

    expect(content).toBeInTheDocument()
  })

  it('upload file without crash', () => {
    const file = new File([], 'hello.png', { type: 'image/png' })

    render(<FileUpload />)

    const content = screen.queryByTestId('file-uploader')

    expect(content).toBeInTheDocument()

    userEvent.upload(content, file)

    // expect(content).toBeInTheDocument()
  })
})
