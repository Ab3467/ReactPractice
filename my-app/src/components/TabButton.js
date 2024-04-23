import React from 'react'

const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    margin: '5px'
  };

export default function TabButton({children, ClickBtn}) {
  return (
    <div>
      <button onClick={ClickBtn} style={buttonStyle}>{children}</button>
    </div>
  )
}
