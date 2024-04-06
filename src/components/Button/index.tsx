interface ButtonProps {
  title: string
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="px-8 py-2 text-lg rounded bg-green-600 hover:bg-green-700 active:bg-green-800 text-slate-50">
      {title}
    </button>
  )
}
