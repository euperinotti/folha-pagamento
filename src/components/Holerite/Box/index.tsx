interface BoxProps {
  title: string
  value: string
}

export const Box = ({ title, value }: BoxProps) => {
  return (
    <div>
      <h5 className="text-slate-400 text-xs font-bold">{title}</h5>
      <span>{value}</span>
    </div>
  )
}
