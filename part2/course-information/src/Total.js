import React from 'react'

const Total = ({course}) => {
  const total = course.parts.reduce((previous, current) => {
      return previous + current.exercises
    }, 0)
  return (
    <div key={course.parts.id}>
      <b>Total of {total} exercises</b>
    </div>
  )
}

export default Total
 