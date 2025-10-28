import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext )
    if(!user) return <div>Please Login</div>
    if(!user.username) return <div>Username Missing</div>
    if(!user.password) return <div>Password Missing</div>
    return <div>Welcome {user.username}</div>
}

export default Profile