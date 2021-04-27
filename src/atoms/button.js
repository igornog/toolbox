import React from 'react'
import './button.scss'

const Button = ({ isLoading = false, id = '', name = '', onClick = () => {}, children, className = '', type = '', disabled }) => {
  return (
    <button
      id={id}
      name={name}
      onClick={onClick}
      className={`custom-button ${className}`}
      type={type}
      disabled={disabled}
    >
      {isLoading ? <label for={name}>Aguarde...</label> : children}
    </button>
  )
}

export default Button
