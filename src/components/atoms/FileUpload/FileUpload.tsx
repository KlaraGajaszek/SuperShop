import React, { FC, useState } from 'react'

type FileUploadPropsType = {
  GetFiles: (file: React.ChangeEvent<HTMLInputElement>) => void
}

export const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState<any>(null)
  return (
    <>
      <div
        className={`cursor-pointer appearance-none block w-full bg-grey text-grey-darker border border-grey-lighter rounded py-3 px-4 `}
      >
        <input
          type="file"
          value={selectedFile}
          data-testid="file-uploader"
          onChange={(e: any) => setSelectedFile(e?.target?.files[0])}
        />
      </div>
    </>
  )
}
