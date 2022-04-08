import React from 'react'

const Total = ({course}) => {
    const { parts } = course
     
    const total = parts.reduce((previousExercise, currentExercise) => {
           return previousExercise + currentExercise.exercises    
    }, 0)

    return (
        <div> 
            <b>Total of {total} exercises</b> 
        </div>
    )
}

export default Total
