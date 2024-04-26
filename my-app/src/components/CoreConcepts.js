import React from 'react'
import "./CoreConcepts.css"




export default function CoreConcepts(props) {
  return (
    <div className="core-concepts-container">
      
        <h3>{props.title}</h3>
        <p>{props.description}</p>
 
    </div>
  )
}
