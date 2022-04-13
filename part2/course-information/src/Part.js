import React from 'react'

const Part = ({ id, name, exercise}) => {
   return (           
    <div key={id}>
      <p>{name}: {exercise}</p>
    </div>
  )
}

export default Part
