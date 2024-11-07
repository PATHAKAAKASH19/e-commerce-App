import React from 'react'

export default function InputBox({className , type, name, defaultValue, required,onChange, ...rest}) {
  return (
    <input 
      type={type} 
      className={className} 
      name
      onChange={onChange}
      value={defaultValue}
      required={required}
      {...rest}
      />
  )
}
