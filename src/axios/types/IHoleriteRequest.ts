export interface IHoleriteRequest {
  cpf: string
  cnpj: string
  horario: {
    horasExtras: number
    horasExtrasFimDeSemana: number
    horasAdicionalNoturno: number
    horasEmDeficit: number
  }
}
