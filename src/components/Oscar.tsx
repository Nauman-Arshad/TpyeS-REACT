type OscarProps ={
    childern:React.ReactNode
}
const Oscar = (props: OscarProps) => {
    return (
        <div>
          {props.childern} 
        </div>
    )
}

export default Oscar
