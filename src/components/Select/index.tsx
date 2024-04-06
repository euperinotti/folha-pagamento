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
    <label className="flex flex-col items-start justify-center gap-2 w-full">
      <h3>{label}</h3>
      <select
        className="w-full bg-slate-200 appearance-none text-lg border-1 border-slate-100 px-2 py-2 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-sm required"
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
