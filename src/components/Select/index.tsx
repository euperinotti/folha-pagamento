import { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: any[]
  placeholder: string
}

export const Select = ({
  label,
  options,
  placeholder,
  ...rest
}: SelectProps) => {
  return (
    <label className="flex flex-col items-start justify-center gap-1 w-full">
      <h4>{label}</h4>
      <select
        className="w-full px-3 py-2 border-slate-200 border-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-md text-base appearance-none required"
        {...rest}
      >
        <option value={''} disabled>
          {placeholder}
        </option>
        {options.map((option, key) => {
          return (
            <option key={key} value={option.value}>
              {option.name}
            </option>
          )
        })}
      </select>
    </label>
  )
}
