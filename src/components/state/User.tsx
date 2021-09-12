import {useState} from 'react'

type AuthUser = {
    name: string
    email: string
}

export const User = () =>{
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name: 'Nauman',
            email: 'nauman@exp.com',
        })
    }
    // const handleLogout=()=>{
    //     setUser(null)
    // }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
             <div>User Name is {user.name}</div>
             <div>User Name is {user.email}</div>

        </div>
    )
}