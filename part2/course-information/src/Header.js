import React from 'react'

const Header = ({course}) => {
  const {id, name, parts } = course
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Header
