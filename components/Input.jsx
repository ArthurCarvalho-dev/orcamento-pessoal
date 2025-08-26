import React from 'react'

export default function Input({ label, type='text', value, onChange, placeholder }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 12, marginBottom: 4 }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}
