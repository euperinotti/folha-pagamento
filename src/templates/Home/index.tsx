import api from '@/axios/axios-provider'
import { IHoleriteRequest } from '@/axios/types/IHoleriteRequest'
import { Button } from '@/components/Button'
import { Holerite } from '@/components/Holerite'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { CardsGroup } from '@/patterns/CardsGroup'
import { FormEvent, useEffect, useState } from 'react'
import { Base } from '../Base'

interface HomeProps {
  data: any[]
}

export const HomeTemplate = ({ data }: HomeProps) => {
  const [config, setConfig] = useState<IHoleriteRequest>({
    cnpj: '',
    cpf: '',
    horario: {
      horasExtras: 0,
      horasExtrasFimDeSemana: 0,
      horasAdicionalNoturno: 0,
      horasEmDeficit: 0
    }
  })
  const [response, setResponse] = useState<any>()
  const [empresas] = useState(data)
  const [empregados, setEmpregados] = useState([])

  useEffect(() => {
    if (config.cnpj != '') {
      const filtered = empresas.find((empresa) => empresa.cnpj == config.cnpj)
      setEmpregados(filtered.empregados)
      console.log(empregados)
    }
  }, [config.cnpj])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setResponse(undefined)

    const response = await api.createHolerite(config)
    setResponse(response)
  }

  return (
    <Base>
      <section className="w-1/3 max-h-[750px] h-full flex flex-col items-start justify-center gap-4 max-w-[1200px]">
        <form
          className="w-full h-full flex flex-col items-start justify-start gap-4 bg-white rounded-xl shadow-lg px-4 py-4 overflow-y-scroll no-scrollbar"
          onSubmit={handleSubmit}
        >
          <h1 className="text-5xl font-black text-green-600">Holerite</h1>
          <div className="w-full flex flex-col items-start justify-center container gap-3">
            <Select
              label="Empresa"
              options={data}
              fieldId="cnpj"
              fieldText="razaoSocial"
              defaultValue={config.cnpj}
              onChange={(e) => {
                setConfig({
                  ...config,
                  cnpj: e.target.value
                })
              }}
              placeholder="Escolha uma empresa"
              required
            />
            <Select
              label="Funcionário"
              options={empregados}
              fieldId="cpf"
              fieldText="nome"
              defaultValue={config.cpf}
              onChange={(e) => {
                setConfig({
                  ...config,
                  cpf: e.target.value
                })
              }}
              placeholder="Escolha um funcionário desta empresa"
              required
            />
          </div>

          <div className="container w-full flex flex-col items-start justify-center gap-2">
            <div className="w-full flex flex-col">
              <h2>Ponto</h2>
              <span className="text-slate-500 text-sm">
                Defina o valor mensal das horas abaixo
              </span>
            </div>
            <Input
              label="Horas Extras"
              defaultValue={config.horario.horasExtras}
              onChange={(e) => {
                setConfig({
                  ...config,
                  horario: {
                    ...config.horario,
                    horasExtras: parseInt(e.target.value)
                  }
                })
              }}
            />

            <Input
              label="Horas Extras em fins de semana"
              defaultValue={config.horario.horasExtrasFimDeSemana}
              onChange={(e) => {
                setConfig({
                  ...config,
                  horario: {
                    ...config.horario,
                    horasExtrasFimDeSemana: parseInt(e.target.value)
                  }
                })
              }}
            />

            <Input
              label="Horas em débito"
              defaultValue={config.horario.horasEmDeficit}
              onChange={(e) => {
                setConfig({
                  ...config,
                  horario: {
                    ...config.horario,
                    horasEmDeficit: parseInt(e.target.value)
                  }
                })
              }}
            />

            <Input
              label="Horas de adicional noturno"
              defaultValue={config.horario.horasAdicionalNoturno}
              onChange={(e) => {
                setConfig({
                  ...config,
                  horario: {
                    ...config.horario,
                    horasAdicionalNoturno: parseInt(e.target.value)
                  }
                })
              }}
            />
          </div>

          <Button title="Exibir holerite" />
        </form>
      </section>
      <section className="w-2/3 max-h-[750px] h-full flex flex-col items-center justify-center">
        {!response ? (
          <span className="text-slate-400">
            O Holetrite do funcionário será exibido aqui
          </span>
        ) : (
          <div className="w-full h-full flex flex-col gap-6 overflow-scroll no-scrollbar">
            <Holerite data={response} />
            <CardsGroup response={response} />
          </div>
        )}
      </section>
    </Base>
  )
}
