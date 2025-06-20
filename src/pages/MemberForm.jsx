import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import MemberContext from "../contexts/MemberContext"

function MemberForm() {
    const { handleNew } = useContext(MemberContext)

    const [ formData, setFormData ] = useState({
        member: '',
        role: ''
    })

    const navigate = useNavigate()

const onFormChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
        ...prev,
        [name]: value
    }))
}

const onSubmit = (e) => {
    e.preventDefault()
    const newMem = {
        ...formData,
        login: formData.member.toLocaleLowerCase(),
        password: formData.member.toLocaleLowerCase(),
        role: formData.role
    }
    handleNew(newMem)
    onCancel()
}

const onClear = () => {
   setFormData({
    member: "",
    role: ""
   }) 
}

const onCancel = () => {
    onClear()
    navigate('/members')
}

return (
<>
<form onSubmit={onSubmit}>
<label htmlFor="member"> NEW Member </label>
<input type="text" name="member" id="member" placeholder="Member name..." onChange={onFormChange} value={formData.member}/>
<select name="role" id="role" onChange={onFormChange} value={formData.role}>
    <option default value="user"> User </option>
      <option value="admin"> Admin </option>
</select>
<button type="submit"> Submit </button>
</form>
</>
)}

export default MemberForm
