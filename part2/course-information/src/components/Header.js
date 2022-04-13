import React from 'react'

const Header = ({course}) => {

  return (

    <div key={course.id}>     
          <h1 key={course.id}>{course.name}</h1>     
             
    </div> 
  )
}

export default Header
