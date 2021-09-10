import React from 'react'
type HeadingProps={
    childern:string
}
const Heading = (props:HeadingProps) => {
    return (
        <div>
            <h3>{props.childern}</h3>
        </div>
    )
}

export default Heading
