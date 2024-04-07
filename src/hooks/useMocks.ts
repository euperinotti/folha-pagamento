import { _empresaMock } from '@/mocks/EmpresaMock'
import { useState } from 'react'

export const useMocks = () => {
  const [empresas] = useState(_empresaMock)

  const getEmpresasMock = () => {
    return empresas
  }

  const getEmpregadosByEmpresaId = (empresaId: string) => {
    return empresaId != ''
      ? empresas.find((empresa) => empresa.id === empresaId)?.empregados
      : []
  }

  return {
    getEmpresasMock,
    getEmpregadosByEmpresaId
  }
}
