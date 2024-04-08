import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { FormEvent, useMemo, useState } from 'react'
import { Base } from '../Base'
import { Holerite } from '@/components/Holerite'
import { useMocks } from '@/hooks/useMocks'

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
  const [response, setResponse] = useState(false)

  const _mocks = useMocks()

  useMemo(() => {}, [config.empresaId])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    console.log(config)
    setResponse(true)
  }

  return (
    <Base>
      <section className="w-1/3 flex flex-col items-start justify-center gap-4 max-w-[1200px]">
        <form
          className="w-full flex flex-col items-start justify-center gap-4 bg-white rounded-xl shadow-lg px-4 py-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-5xl font-black text-green-600">Holerite</h1>
          <div className="w-full flex flex-col items-start justify-center container gap-3">
            <Select
              label="Empresa"
              options={_mocks.getEmpresasMock()}
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
              options={_mocks.getEmpregadosByEmpresaId(config.empresaId)!}
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

          <div className="container w-full flex flex-col items-start justify-center gap-2">
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

            <Input
              label="Horas Extras em fins de semana"
              defaultValue={config.horarios.horasExtrasFimDeSemana}
              onChange={(e) => {
                setConfig({
                  ...config,
                  horarios: {
                    ...config.horarios,
                    horasExtrasFimDeSemana: parseInt(e.target.value)
                  }
                })
              }}
            />

            <Input
              label="Horas em débito"
              defaultValue={config.horarios.horasEmDebito}
              onChange={(e) => {
                setConfig({
                  ...config,
                  horarios: {
                    ...config.horarios,
                    horasEmDebito: parseInt(e.target.value)
                  }
                })
              }}
            />

            <Input
              label="Horas de adicional noturno"
              defaultValue={config.horarios.horasAdicionalNoturno}
              onChange={(e) => {
                setConfig({
                  ...config,
                  horarios: {
                    ...config.horarios,
                    horasAdicionalNoturno: parseInt(e.target.value)
                  }
                })
              }}
            />
          </div>

          <Button title="Exibir holerite" />
        </form>
      </section>
      <section className="w-2/3 h-full flex flex-col items-center justify-center">
        {!response ? (
          <span className="text-slate-400">
            O Holetrite do funcionário será exibido aqui
          </span>
        ) : (
          <Holerite />
        )}
      </section>
    </Base>
  )
}
