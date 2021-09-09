import React from 'react'
 type GreetProps={
name:string
message: number
isLoggedIn:boolean
 }
const Greet = (props:GreetProps) => {
      return (
            <div>
                  <h4>
                  {props.isLoggedIn
                  ? `Wellcome ${props.name}! you have ${props.message} unread messages` : 'Welcome Guest'
                  }
               </h4>
            </div>
      )
}

export default Greet
