import { InputHTMLAttributes } from 'react'
import { InputContainer } from '../InputContainer'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <InputContainer label={label}>
      <input
        {...rest}
        className="px-3 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-sm w-full"
      />
    </InputContainer>
  )
}
