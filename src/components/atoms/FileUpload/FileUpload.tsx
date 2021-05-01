import React from 'react'

type FileUploadPropsType = {
  fileRef: React.RefObject<HTMLInputElement>
}

export const FileUpload = ({ fileRef }: FileUploadPropsType) => {
  return (
    <div
      className={`cursor-pointer appearance-none block w-full bg-grey text-grey-darker border border-grey-lighter rounded py-3 px-4 `}
    >
      <input type="file" data-testid="file-uploader" ref={fileRef} />
    </div>
  )
}
