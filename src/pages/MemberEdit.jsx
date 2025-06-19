import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import MemberContext from "../contexts/MemberContext"

function MemberEdit() {
    const { members, handleEdit } = useContext(MemberContext)

    const [ formData, setFormData ] = useState({
        id: '',
        member: ''
    })

    const { id } = useParams()

    const navigate = useNavigate()

useEffect(() => {
    const match = members.find(m => m.id === id)
    if(!match) return;

    const updated = {
        id: match.id,
        member: match.member
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
    id: "",
    member: ""
   }) 
    navigate('/members')
}

return (
<>
<form onSubmit={onSubmit}>
<label htmlFor="member"> NEW Member </label>
<input type="text" name="member" id="member" placeholder="Member name..." onChange={onFormChange} value={formData.member}/>
<button type="submit"> Update </button>
</form>
</>
)}

export default MemberEdit
