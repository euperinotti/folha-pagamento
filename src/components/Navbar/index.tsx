import { Button } from '../Button'
import { NavbarItem } from './Item'

export const Navbar = () => {
  return (
    <div className="w-full flex items-end justify-center gap-8 bg-slate-100 pt-4">
      <NavbarItem title="Empresas" />
      <NavbarItem title="Colaboradores" />
      <Button title="Exibir" />
    </div>
  )
}
