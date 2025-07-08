import { FieldError } from 'react-hook-form'

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
}

const FormField = ({ label, error, ...inputProps }: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={inputProps.name}
        className="text-third font-medium text-sm sm:text-base"
      >
        {label}
      </label>

      <input
        id={inputProps.name}
        {...inputProps}
        className={`bg-fourth/20 rounded-md px-2 py-1 sm:py-3 border-[1px] border-fourth w-full text-third text-base sm:text-lg placeholder:text-second/40 outline-third ${
          inputProps.className ?? ''
        }`}
      />

      {error && <span className="text-red-500 text-xs">{error.message}</span>}
    </div>
  )
}

export default FormField
