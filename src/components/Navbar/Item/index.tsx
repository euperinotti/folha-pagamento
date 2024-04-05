interface NavbarItemProps {
  title: string
}

export const NavbarItem = ({ title }: NavbarItemProps) => {
  return <div className="py-2 px-4 border-b-2 border-green-500">{title}</div>
}
