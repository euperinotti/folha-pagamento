import { SelectHTMLAttributes } from 'react'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: any[]
  placeholder: string
  fieldId: string
  fieldText: string
}

export const Select = ({
  label,
  options,
  placeholder,
  fieldId,
  fieldText,
  ...rest
}: SelectProps) => {
  return (
    <label className="flex flex-col items-start justify-center gap-1 w-full">
      <h4>{label}</h4>
      <select
        className="w-full px-3 py-2 border-slate-200 border-2 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 rounded-md text-base appearance-none required"
        {...rest}
      >
        <option
          value={''}
          className="text-slate-400 disabled:text-slate-400 invalid:text-red-500"
          disabled
        >
          {placeholder}
        </option>
        {options.length > 0 &&
          options.map((option, key) => {
            return (
              <option key={key} value={option[fieldId]}>
                {option[fieldText]}
              </option>
            )
          })}
      </select>
    </label>
  )
}
