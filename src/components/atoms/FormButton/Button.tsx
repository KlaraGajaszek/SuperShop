import React from 'react'
import classnames from 'classnames'

export type ButtonProps = {
  content: string
  bgColor: string
  textColor: string
  onClick?: () => void
  size: string
}

export const Button = ({
  size,
  bgColor,
  textColor,
  content,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classnames(
        `bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded`,
        {
          'text-xs': size === 'sm',
          'text-xl': size === 'lg',
        }
      )}
    >
      {content}
    </button>
  )
}

export default Button
