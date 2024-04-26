import React from 'react'
import "./index.css"

export default function CoreConcepts(props) {
  return (
    <div className="CoreConcepts">
      
        <h3>{props.title}</h3>
        <p>{props.description}</p>
 
    </div>
  )
}
