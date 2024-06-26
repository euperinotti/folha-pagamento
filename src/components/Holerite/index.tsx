import { StringUtils } from '@/utils/StringUtils'
import { Box } from './Box'

interface HoleriteProps {
  data: any
}

export const Holerite = ({ data }: HoleriteProps) => {
  return (
    <div className="bg-white aspect-16/10 w-full max-w-[950px] min-h-[500px] h-auto flex flex-col items-center justify-start px-2 py-2 gap-2 shadow-lg">
      <div
        className="w-full flex flex-col items-center justify-start gap-0.5"
        id="holerite-top"
      >
        <div className="w-full flex items-center justify-between border-slate-950 border-[1px] px-2">
          <div className="container">
            <h4>{data.empregador.razaoSocial}</h4>
            <span>CNPJ: {data.empregador.cnpj}</span>
          </div>

          <div className="w-2/3 text-center">
            <h4>Recibo de Pagamento de salário</h4>
            <span>Março/2024</span>
          </div>
        </div>

        <div className="w-full flex items-center justify-between border-slate-950 border-[1px] px-2">
          <div className="container">
            <Box title="Nome do Funcionário" value={data.empregado.nome} />
          </div>

          <div className="text-center flex gap-2">
            <Box title="Cargo" value={data.empregado.contrato.cargo} />
            <Box title="Função" value={data.empregado.contrato.funcao} />
          </div>
        </div>
      </div>

      <div
        className="w-full flex flex-col items-center justify-start gap-0.5 h-full"
        id="body"
      >
        <table className="w-full text-sm h-full">
          <thead>
            <tr>
              <th className="border-slate-950 border-[1px]">Descrição</th>
              <th className="border-slate-950 border-[1px]">Referência</th>
              <th className="border-slate-950 border-[1px]">Vencimentos</th>
              <th className="border-slate-950 border-[1px]">Descontos</th>
            </tr>
          </thead>
          <tbody className="border-slate-950 border-[1px] align-top">
            {data.proventos.beneficios.map((provento: any, key: number) => {
              if (provento.vencimento != 0) {
                return (
                  <tr
                    className="hover:bg-slate-100 max-h-fit leading-4"
                    key={key}
                  >
                    <td className="px-2">{provento.descricao}</td>
                    <td className="px-2 text-center">{provento.referencia}</td>
                    <td className="px-2 text-center">
                      {StringUtils.convertToCurrency(provento.vencimento)}
                    </td>
                    <td className="px-2"></td>
                  </tr>
                )
              }
            })}
            {data.proventos.descontos.map((provento: any, key: number) => {
              if (provento.desconto != 0) {
                return (
                  <tr
                    className="hover:bg-slate-100 max-h-fit leading-4"
                    key={key}
                  >
                    <td className="px-2">{provento.descricao}</td>
                    <td className="px-2 text-center">{provento.referencia}</td>
                    <td className="px-2"></td>
                    <td className="px-2 text-center">
                      {StringUtils.convertToCurrency(provento.desconto)}
                    </td>
                  </tr>
                )
              }
            })}
            {data.proventos.descontosEmFolha.map(
              (provento: any, key: number) => {
                if (provento.desconto != 0) {
                  return (
                    <tr
                      className="hover:bg-slate-100 max-h-fit leading-4"
                      key={key}
                    >
                      <td className="px-2">{provento.descricao}</td>
                      <td className="px-2 text-center">
                        {provento.referencia}
                      </td>
                      <td className="px-2"></td>
                      <td className="px-2 text-center">
                        {StringUtils.convertToCurrency(provento.desconto)}
                      </td>
                    </tr>
                  )
                }
              }
            )}
            <tr className="h-full">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <tfoot className="text-sm text-center">
            <tr className="border-slate-950 border-[1px]">
              <td></td>
              <td></td>
              <td className="border-slate-950 border-[1px] px-2">
                <Box
                  title="Total de vencimentos"
                  value={StringUtils.convertToCurrency(
                    data.proventos.totalBeneficios
                  )}
                />
              </td>
              <td className="border-slate-950 border-[1px] px-2">
                <Box
                  title="Total de descontos"
                  value={StringUtils.convertToCurrency(
                    data.proventos.totalDescontos
                  )}
                />
              </td>
            </tr>
            <tr className="border-slate-950 border-[1px]">
              <td></td>
              <td></td>
              <td className="border-slate-950 border-[1px] px-2">
                Valor Líquido
              </td>
              <td className="border-slate-950 border-[1px] px-2">
                {StringUtils.convertToCurrency(
                  data.empregado.contrato.salario.liquido
                )}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div
        className="w-full flex flex-col items-center justify-start gap-0.5"
        id="holerite-bottom"
      >
        <div className="w-full flex items-center justify-between border-slate-950 border-[1px] px-2 py-2">
          <div className="text-center w-full flex justify-between gap-2">
            <Box
              title="Salário base"
              value={StringUtils.convertToCurrency(
                data.empregado.contrato.salario.bruto
              )}
            />
            <Box
              title="Salário contr. INSS"
              value={StringUtils.convertToCurrency(
                data.salarioContribuicaoInss
              )}
            />
            <Box
              title="Base cálculo FGTS"
              value={StringUtils.convertToCurrency(data.baseCalculoFgts)}
            />
            <Box
              title="FGTS do Mês"
              value={StringUtils.convertToCurrency(data.fgtsMensal)}
            />
            <Box
              title="Base Cálculo IRRF"
              value={StringUtils.convertToCurrency(data.baseCalculoIrrf)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
