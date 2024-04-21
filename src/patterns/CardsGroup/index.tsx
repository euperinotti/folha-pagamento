import { Card } from '@/components/Card'
import React from 'react'

interface CardsGroupProps {
  response: any
}

export const CardsGroup = ({ response }: CardsGroupProps) => {
  return (
    <div className="flex flex-col gap-4">
      {' '}
      <Card title="Empresa">
        <ul>
          <li>Cnpj: {response.empregador.cnpj}</li>
          <li>Razão Social: {response.empregador.razaoSocial}</li>
          <li>Nome fantasia: {response.empregador.nomeFantasia}</li>
          <li>Ramo de atividade: {response.empregador.ramoAtividade}</li>
          <li>
            Carga horária diária: {response.empregador.cargaHorariaDiaria}
          </li>
          <li>Dias a trabalhar: {response.empregador.diasATrabalhar}</li>
        </ul>
      </Card>
      <Card title="Funcionário">
        <ul>
          <li>Cpf: {response.empregado.cpf}</li>
          <li>Nome: {response.empregado.nome}</li>
          <li>Data nascimento: {response.empregado.dataNascimento}</li>
        </ul>
      </Card>
      <Card title="Dependentes">
        {response.empregado.dependentes.length > 0
          ? response.empregado.dependentes.map(
              (funcionario: any, index: number) => {
                return (
                  <ul key={index}>
                    <li>Nome: {funcionario.nome}</li>
                  </ul>
                )
              }
            )
          : 'Nenhum dependente encontrado'}
      </Card>
      <Card title="Funcionárias com salário maternidade">
        {response.empregador.funcionariasComSalarioMaternidade.length > 0
          ? response.empregador.funcionariasComSalarioMaternidade.map(
              (funcionario: any, index: number) => {
                return (
                  <ul key={index}>
                    <li>Nome: {funcionario.nome}</li>
                  </ul>
                )
              }
            )
          : 'Nenhum fucionário encontrado'}
      </Card>
      <Card title="Funcionarias agrupados">
        {response.empregador.funcionariosAgrupados.length > 0
          ? response.empregador.funcionariasComSalarioMaternidade.map(
              (funcionario: any, index: number) => {
                return (
                  <ul key={index}>
                    <li>Nome: {funcionario.nome}</li>
                  </ul>
                )
              }
            )
          : 'Nenhum fucionário encontrado'}
      </Card>
    </div>
  )
}
