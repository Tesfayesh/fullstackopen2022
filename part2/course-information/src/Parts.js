import React from 'react'

const Parts = ({part}) => {
   const {id, name, exercises} = part
   return (
        <div>
           <p key = 'id'>
             {name}: {exercises}
          </p> 
        </div>
   )
}

export default Parts
