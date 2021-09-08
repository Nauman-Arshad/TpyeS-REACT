import React from 'react'
 type GreetProps={
name:string
 }
const Greet = (props:GreetProps) => {
      return (
            <div>
               WelCome {props.name}! you Are on TypeScript Now   
            </div>
      )
}

export default Greet
