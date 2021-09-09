import React from 'react'

type PersonListProps={
      names:{
            first:string
            last:string

      }[]
}

const PersonList = (props: PersonListProps) => {
      return (
            
            <div>
                  {props.names.map(name=>{
                        return(
                              <h4 key={name.first}>{name.first} {name.last}</h4>
                        )
                  })}
                
            </div>
      )
}

export default PersonList
