import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import MemberContext from "../contexts/MemberContext"

function MemberEdit() {
    const { members, handleEdit } = useContext(MemberContext)

    const [ formData, setFormData ] = useState({
        id: '',
        member: '',
        login: '',
        password: '',
        role: ''
    })

    const { id } = useParams()

    const navigate = useNavigate()

useEffect(() => {
    const match = members.find(m => m.id === id)
    if(!match) return;

    const updated = {
        id: match.id,
        member: match.member,
        login: match.login,
        password: match.password,
        role: match.role
    }
    setFormData(updated)
},[id, members])

const onFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
        ...prev,
        [name]: value
    }))
}

const onSubmit = (e) => {
    e.preventDefault()
    const updatedMem = {
        ...formData
    }
    handleEdit(updatedMem)
    onCancel()
}

const onCancel = () => {
    setFormData({
        id: '',
        member: '',
        login: '',
        password: '',
        role: ''
   }) 
    navigate('/members')
}

return (
<>
<form onSubmit={onSubmit}>
<label htmlFor="member"> Member </label>
<input type="text" name="member" id="member" placeholder="Member name..." onChange={onFormChange} value={formData.member}/>
<label htmlFor="login"> Login </label>
<input type="text" name="login" id="login" placeholder="Login..." onChange={onFormChange} value={formData.login}/>
<label htmlFor="password"> Password </label>
<input type="password" name="password" id="password" placeholder="Password..." onChange={onFormChange} value={formData.password}/>
<select name="role" id="role" onChange={onFormChange} value={formData.role}>
    <option default value="user"> User </option>
      <option value="admin"> Admin </option>
</select>
<button type="submit"> Update </button>
</form>
</>
)}

export default MemberEdit
