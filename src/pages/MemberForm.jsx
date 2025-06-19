import { useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import MemberContext from "../contexts/MemberContext"

function MemberForm() {
    const { handleNew } = useContext(MemberContext)

    const [ formData, setFormData ] = useState({
        member: ''
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
        password: formData.member.toLocaleLowerCase()
    }
    handleNew(newMem)
    onCancel()
}

const onClear = () => {
   setFormData({
    member: ""
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

<button type="submit"> Submit </button>
</form>
</>
)}

export default MemberForm
