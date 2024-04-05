interface ButtonProps {
  title: string
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="px-5 py-2 rounded bg-green-500 text-slate-50">
      {title}
    </button>
  )
}
