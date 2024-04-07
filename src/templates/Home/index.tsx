import { Select } from '@/components/Select'
import { Base } from '../Base'
import { useState } from 'react'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

interface IConfig {
  empresaId: string
  funcionarioId: string
  horarios: {
    horasExtras: number
    horasExtrasFimDeSemana: number
    horasAdicionalNoturno: number
    horasEmDebito: number
  }
}

export const HomeTemplate = () => {
  const [config, setConfig] = useState<IConfig>({
    empresaId: '',
    funcionarioId: '',
    horarios: {
      horasExtras: 0,
      horasExtrasFimDeSemana: 0,
      horasAdicionalNoturno: 0,
      horasEmDebito: 0
    }
  })

  return (
    <Base>
      <section className="w-1/3 flex flex-col items-start justify-center gap-8">
        <h1 className="text-5xl font-black text-green-600">Holerite</h1>
        <form
          className="w-full flex flex-col items-start justify-center gap-8 bg-white rounded-xl shadow-lg px-4 py-4"
          action=""
        >
          <div className="w-full flex flex-col items-start justify-center container gap-3">
            <Select
              label="Empresa"
              options={[{ name: 'Empresa 1', value: '100' }]}
              defaultValue={config.empresaId}
              onChange={(e) => {
                setConfig({
                  ...config,
                  empresaId: e.target.value
                })
              }}
              placeholder="Escolha uma empresa"
              required
            />
            <Select
              label="Funcionário"
              options={[{ name: 'Funcionário 1', value: '100' }]}
              defaultValue={config.funcionarioId}
              onChange={(e) => {
                setConfig({
                  ...config,
                  funcionarioId: e.target.value
                })
              }}
              placeholder="Escolha um funcionário desta empresa"
              required
            />
          </div>

          <div className="container w-full flex flex-col items-start justify-center gap-3">
            <h2>Ponto</h2>
            <Input
              label="Horas Extras"
              defaultValue={config.horarios.horasExtras}
              onChange={(e) => {
                setConfig({
                  ...config,
                  horarios: {
                    ...config.horarios,
                    horasExtras: parseInt(e.target.value)
                  }
                })
              }}
            />
          </div>

          <Button title="Exibir holerite" />
        </form>
      </section>
      <section className="w-2/3 flex flex-col items-start justify-center">
        <span>O Holetrite do funcionário será exibido aqui</span>
      </section>
    </Base>
  )
}
