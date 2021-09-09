import React from 'react'
type PersonProps={
      name:{
            first:string
            last :string
      }
}
const Person = (props:PersonProps) => {
      return (
            <div>
                 <h4>{props.name.first} {props.name.last}</h4> 
            </div>
      )
}

export default Person
