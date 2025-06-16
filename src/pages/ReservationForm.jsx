import { useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import MemberContext from "../contexts/MemberContext"
import ReservationContext from "../contexts/ReservationContext"

function ReservationForm() {

    const { members } = useContext(MemberContext)
    const { handleNew } = useContext(ReservationContext)

    const [formData, setFormData] = useState({
        mid: '',
        member: '',
        guests: 0,
        notes: '',
        guest_list: []
    })

    useEffect(() => {
        const match = members.find(m => (
            m.member.toLowerCase() === formData.member.toLowerCase())
        )
        setFormData(prev => ({
            ...prev,
            mid: match ? match.id : '',
        }))
    }, [members, formData.member])


    const navigate = useNavigate()

    const onFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };


    const onSubmit = (e) => {
        e.preventDefault()
       const newRes = {
    mid: formData.mid,
    member: formData.member,
    guests: formData.guests,
    notes: formData.notes,
    guest_list: formData.guest_list
}
        handleNew(newRes)
        onCancel()
    }



    const onClear = () => {
        setFormData({
            mid: '',
            member: '',
            guests: 0,
            notes: '',
            guest_list: [],
        })
    }

    const onCancel = () => {
        onClear()
        navigate('/reservations')
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor="mid">MEMBER_ID: </label>
                <input disabled type="text" name="mid" id="mid" onChange={onFormChange} value={formData.mid} placeholder="Member Id..." />

                <label htmlFor="member">MEMBER_NAME: </label>
                <input type="text" name="member" id="member" onChange={onFormChange} value={formData.member} placeholder="Member name..." />

                <label htmlFor="guests">GUEST COUNT (incl. member): </label>
                <input type="number" name="guests" id="guests" onChange={onFormChange} value={formData.guests} placeholder="Total party #..." />

                <label htmlFor="notes">NOTES: </label>
                <input type="text" name="notes" id="notes" onChange={onFormChange} value={formData.notes} placeholder="Additional notes and info..." />

                <label htmlFor="guest_list">PARTY: </label>
      <input type="text" name="guest_list" id="guest_list" onChange={onFormChange} value={formData.guest_list} placeholder="Guest list..." />


                <section>
                    <button type="submit" > Submit </button>
                    <button type="button" onClick={onClear} > Clear </button>
                    <button type="button" onClick={onCancel} > Cancel </button>
                </section>
            </form>
        </>
    )
}

export default ReservationForm
