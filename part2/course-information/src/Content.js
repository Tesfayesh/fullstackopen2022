import React from 'react'
import Parts from './Parts'



const Content = ({course}) => {
    const { parts } = course;

    return (        
        parts.map((part) =>
          <div key={part.id}>     
            <Parts  part = {part} />
          </div>)          
    )
          
  }

export default Content

