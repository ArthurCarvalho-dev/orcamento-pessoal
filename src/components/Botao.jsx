import React from 'react'

export default function Botao({ children, onClick, variant='primary', type='button' }) {
  return (
    <button className={variant} onClick={onClick} type={type}>
      {children}
    </button>
  )
}
