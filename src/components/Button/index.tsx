interface ButtonProps {
  title: string
}

export const Button = ({ title }: ButtonProps) => {
  return (
    <button className="px-8 py-2 text-lg rounded-md bg-green-600 transition-all hover:bg-green-700 active:bg-green-800 text-slate-50 w-full">
      {title}
    </button>
  )
}
