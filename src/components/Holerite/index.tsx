import { Box } from './Box'

export const Holerite = () => {
  return (
    <div className="bg-white w-[780px] h-[520px] flex flex-col items-center justify-start px-2 py-2 gap-2 shadow-lg">
      <div
        className="w-full flex flex-col items-center justify-start gap-0.5"
        id="holerite-top"
      >
        <div className="w-full flex items-center justify-between border-slate-950 border-[1px] px-2">
          <div className="container">
            <h4>Empresa Ficticia LTDA</h4>
            <span>CNPJ: 00.000.000/0001-00</span>
          </div>

          <div className="w-2/3 text-center">
            <h4>Recibo de Pagamento de salário</h4>
            <span>Março/2024</span>
          </div>
        </div>

        <div className="w-full flex items-center justify-between border-slate-950 border-[1px] px-2">
          <div className="container">
            <Box title="Nome do Funcionário" value="Bertie Perry" />
          </div>

          <div className="text-center flex gap-2">
            <Box title="Cargo" value="Zeladora" />
            <Box title="Função" value="Diarista" />
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
            <tr className="hover:bg-slate-100 max-h-fit leading-4">
              <td className="px-2">Vale Alimentação</td>
              <td className="px-2">11%</td>
              <td className="px-2">R$ 300</td>
              <td className="px-2"></td>
            </tr>
            <tr className="hover:bg-slate-100 leading-4">
              <td className="px-2">Vale Alimentação</td>
              <td className="px-2">11%</td>
              <td className="px-2">R$ 300</td>
              <td className="px-2"></td>
            </tr>
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
                <Box title="Total de vencimentos" value="R$ 2.500,00" />
              </td>
              <td className="border-slate-950 border-[1px] px-2">
                <Box title="Total de descontos" value="R$ 300,00" />
              </td>
            </tr>
            <tr className="border-slate-950 border-[1px]">
              <td></td>
              <td></td>
              <td className="border-slate-950 border-[1px] px-2">
                Valor Líquido
              </td>
              <td className="border-slate-950 border-[1px] px-2">R$ 300,00</td>
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
            <Box title="Salário base" value="R$ 2.500,00" />
            <Box title="Salário contr. INSS" value="R$ 2.500,00" />
            <Box title="Base cálculo FGTS" value="R$ 2.500,00" />
            <Box title="FGTS do Mês" value="R$ 200,00" />
            <Box title="Base Cálculo IRRF" value="R$ 200,00" />
          </div>
        </div>
      </div>
    </div>
  )
}
