import { useState, useEffect, useContext } from "react"
import MemberContext from "../contexts/MemberContext"
import CurrentUserContext from "../contexts/CurrentUserContext"

function Login() {

const { members } = useContext(MemberContext)
    
const { isLoggedIn, currentUser, setCurrentUser } = useContext(CurrentUserContext)


 const [ loginForm, setLoginForm ] = useState({
    member: '',
    password: '',
 })

 useEffect(() => {
    const match = members.find(u => u.member.toLowerCase() === loginForm.member.toLowerCase()) || ''
    setCurrentUser(match)
},[loginForm.member])


 const onChange = (e) => {
    const { name, value } = e.target
    setLoginForm(prev => ({
        ...prev,
        [name]: value
    }))
 }

const onSubmit = (e) => {
    e.preventDefault()
}

return (
<>

<form onSubmit={onSubmit}>
    Login: <input type="username" name="member" id="member" onChange={onChange} value={loginForm.member} />
    Password: <input type="password" name="password" id="password" onChange={onChange} value={loginForm.password} />
    <button type="submit">{currentUser?.id ? "Enter Password" : "Login" }</button>
</form>
</>
)}

export default Login
