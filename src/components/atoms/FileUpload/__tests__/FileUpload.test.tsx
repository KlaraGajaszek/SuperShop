import React from 'react'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import 'jest-styled-components'

import { FileUpload } from '../FileUpload'

describe('Content', () => {
  it('render without crash', () => {
    const ref = React.createRef<HTMLInputElement>()

    render(<FileUpload fileRef={ref} />)

    const content = screen.getByTestId('file-uploader')

    expect(content).toBeInTheDocument()
  })

  it('upload file without crash', () => {
    const file = new File(['Test'], 'hello.png', { type: 'image/png' })
    const ref = React.createRef<HTMLInputElement>()

    render(<FileUpload fileRef={ref} />)

    const fileInput = screen.queryByTestId('file-uploader') as HTMLInputElement

    expect(fileInput).toBeInTheDocument()

    userEvent.upload(fileInput, file)

    expect(ref?.current?.files?.length).toBe(1)
  })
})
