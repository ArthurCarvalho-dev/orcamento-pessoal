import React from 'react'
import Botao from './Botao'

export default function DespesaItem({ despesa, onDelete }) {
  const dataFmt = new Date(despesa.data + 'T00:00:00')
  const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
  return (
    <li className="item">
      <span>{despesa.descricao}</span>
      <span className="badge">{formatter.format(Number(despesa.valor || 0))}</span>
      <span>{dataFmt.toLocaleDateString('pt-BR')}</span>
      <Botao variant="danger" onClick={onDelete}>Excluir</Botao>
    </li>
  )
}
