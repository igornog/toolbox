import React from 'react'
import './button.scss'

const Button = ({ id = '', name = '', onClick = () => {}, children, className = '', type = '', disabled }) => {
  return (
    <button
      id={id}
      name={name}
      onClick={onClick}
      className={`custom-button ${className}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
