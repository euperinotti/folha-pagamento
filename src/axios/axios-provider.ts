import axiosConfig from './config'
import { IHoleriteRequest } from './types/IHoleriteRequest'

const api = {
  getEmpresas: async () => {
    const res = await axiosConfig.get('/empresas')
    return res.data
  },
  getEmpregados: async () => {
    const res = await axiosConfig.get('/empregados')
    return res.data
  },
  getEmpresaByCnpj: async (cnpj: string) => {
    const res = await axiosConfig.get(`/empresas/${cnpj}`)
    return res.data
  },
  getEmpregadoByCpf: async (cpf: string) => {
    const res = await axiosConfig.get(`/empregados/${cpf}`)
    return res.data
  },
  createHolerite: async (holeriteSetup: IHoleriteRequest) => {
    const body = JSON.stringify(holeriteSetup)
    const res = await axiosConfig.post('/holerite', body)
    return res.data
  }
}

export default api
