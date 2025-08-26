import React, { useState } from 'react'
import Input from './components/Input'
import Botao from './components/Botao'
import DespesaItem from './components/DespesaItem'

export default function App() {
  const [despesas, setDespesas] = useState([])
  const [descricao, setDescricao] = useState('')
  const [valor, setValor] = useState('')
  const [data, setData] = useState('')
  const [mesSelecionado, setMesSelecionado] = useState(new Date().getMonth() + 1)

  function adicionarDespesa() {
    if (!descricao || !valor || !data) return
    const novaDespesa = { id: Date.now(), descricao, valor, data }
    setDespesas([...despesas, novaDespesa])
    setDescricao('')
    setValor('')
    setData('')
  }

  function excluirDespesa(id) {
    setDespesas(despesas.filter(d => d.id !== id))
  }

  const despesasFiltradas = despesas.filter(d => {
    const mes = new Date(d.data + 'T00:00:00').getMonth() + 1
    return mes === Number(mesSelecionado)
  })

  const total = despesasFiltradas.reduce((acc, d) => acc + Number(d.valor), 0)

  return (
    <div className="container">
      <h1>💰 Calculadora de Orçamento Pessoal</h1>

      <div className="form-grid">
        <Input label="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
        <Input label="Valor" type="number" value={valor} onChange={e => setValor(e.target.value)} />
        <Input label="Data" type="date" value={data} onChange={e => setData(e.target.value)} />
        <Botao onClick={adicionarDespesa}>Adicionar</Botao>
      </div>

      <div className="select-month">
        <label>Filtrar por mês: </label>
        <select value={mesSelecionado} onChange={e => setMesSelecionado(e.target.value)}>
          {Array.from({ length: 12 }).map((_, i) => (
            <option key={i+1} value={i+1}>{i+1}</option>
          ))}
        </select>
      </div>

      <ul className="list">
        {despesasFiltradas.map(despesa => (
          <DespesaItem key={despesa.id} despesa={despesa} onDelete={() => excluirDespesa(despesa.id)} />
        ))}
      </ul>

      <div className="summary">
        <strong>Total do mês:</strong>
        <span>R$ {total.toFixed(2)}</span>
      </div>

      <footer>Desenvolvido no meu aprendizado com React 🚀</footer>
    </div>
  )
}
