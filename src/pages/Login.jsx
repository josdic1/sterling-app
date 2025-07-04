import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import CurrentUserContext from "../contexts/CurrentUserContext"
import MemberContext from "../contexts/MemberContext"

function Login() {

    const { members = [] } = useContext(MemberContext);
    const { setCurrentUser } = useContext(CurrentUserContext)

    const [ formData, setFormData ] = useState({
        member: "",
        password: "",
        role: ""
    })

    const [ match, setMatch ] = useState({
        id: "",
      member: "",
      login: "",
      password: "",
      role: ""
    })

    const navigate = useNavigate()

    const isLoggedIn = match?.id ? true : false

useEffect(() => {
  if (!formData.member) {
    setMatch({ id: "", member: "", login: "", password: "", role: "" });
    return;
  }
  const userMatch = members.find(m => (
typeof m.member === "string" &&
typeof formData.member === "string" &&
m.member.toLowerCase() === formData.member.toLowerCase()
  ));
  console.log("Matching user:", userMatch);
  if (userMatch) setMatch(userMatch);
  else setMatch({ id: "", member: "", login: "", password: "", role: "" });
}, [members, formData.member]);

    const onFormChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

const onSubmit = (e) => {
  e.preventDefault()
  const newLogin = {
    id: match.id,
    uid: match.login,
    member: match.member,
    password: match.password,
    role: match.role
  }

  setCurrentUser(newLogin)
  navigate('/welcome')
  onClear()
}
    const onClear = () => {
        setFormData({
        member: "",
        password: "",
        role: ""
        })
        setMatch({
        id: "",
      member: "",
      login: "",
      password: "",
      role: ""
        })
    }

return (
<>
<form onSubmit={onSubmit}>
<input type="text" name="member" id="member" onChange={onFormChange} value={formData.member} placeholder="User name..." />
<input disabled type="password" name="password" id="password" placeholder="No Password Required"/>
{isLoggedIn ? <button type="submit" style={{backgroundColor: 'green'}}>Login</button> : ""}
<button type="button" onClick={onClear} name="clear" id="clear" style={{backgroundColor: "#333"}}>Clear</button>
</form>
</>
)}

export default Login
