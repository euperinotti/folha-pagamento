import { useState } from 'react'

export const useEmpresas = (responseEmpresas: any[]) => {
  const [empresas] = useState(responseEmpresas)

  const getEmpresas = () => {
    return empresas
  }

  const getEmpregadosByEmpresaId = (empresaId: string) => {
    return empresaId != ''
      ? empresas.find((empresa) => empresa.cnpj == empresaId)?.empregados
      : []
  }

  return {
    data: empresas,
    getEmpresas,
    getEmpregadosByEmpresaId
  }
}
