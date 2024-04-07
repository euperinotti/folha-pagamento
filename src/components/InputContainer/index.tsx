import { LabelHTMLAttributes, ReactNode } from 'react'

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
      className="flex flex-col items-start justify-center gap-1 w-full"
      {...rest}
    >
      <h4 className="font-normal">{label}</h4>
      {children}
    </label>
  )
}
