import React, { LabelHTMLAttributes, ReactNode } from 'react'

interface InputContainerProps extends LabelHTMLAttributes<HTMLLabelElement> {
  label: string
  children: ReactNode
}

export const InputContainer = ({
  label,
  children,
  ...rest
}: InputContainerProps) => {
  return (
    <label
      className="flex flex-col items-start justify-center gap-2 w-full"
      {...rest}
    >
      <h3>{label}</h3>
      {children}
    </label>
  )
}
