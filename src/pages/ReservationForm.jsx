import { useNavigate } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import MemberContext from "../contexts/MemberContext"
import ReservationContext from "../contexts/ReservationContext"
import GuestFieldInputButtons from "../components/GuestFieldInputButtons"


function ReservationForm() {

    const { members } = useContext(MemberContext)
    const { handleNew } = useContext(ReservationContext)

    const [guestList, setGuestList] = useState([])
    const [formData, setFormData] = useState({
        mid: '',
        member: '',
        guests: 0,
        notes: '',
        room: '',
        arrival: '',
        guest_array: []
    })

    const navigate = useNavigate()
        
useEffect(() => {
  const match = members.find(m => m.member.toLowerCase() === formData.member.toLowerCase());
  if (match) {
    setFormData(prev => ({
      ...prev,
      mid: match.id
    }));
  } else {
    setFormData(prev => ({
      ...prev,
      mid: ''
    }));
  }
}, [formData.member, members]);

const roundToNearest15 = (dateStr) => {
  const date = new Date(dateStr);
  const ms = 1000 * 60 * 15; // 15 min in ms
  const rounded = new Date(Math.round(date.getTime() / ms) * ms);
  return rounded.toISOString().slice(0, 16);
};

const onFormChange = (e) => {
  const { name, value } = e.target;
  const newVal = name === "arrival"
    ? roundToNearest15(value)
    : value;

  setFormData(prev => ({
    ...prev,
    [name]: newVal
  }));
};

 const addInput = () => {
  setGuestList(prev => [...prev, ""]);
};
const removeInput = () => {
  setGuestList(prev => prev.slice(0, -1));
};
function getRoundedNow() {
  const now = new Date();
  now.setSeconds(0);
  now.setMilliseconds(0);
  const minutes = now.getMinutes();
  const rounded = Math.ceil(minutes / 15) * 15;
  now.setMinutes(rounded >= 60 ? 0 : rounded);
  if (rounded >= 60) now.setHours(now.getHours() + 1);
  return now.toISOString().slice(0, 16); // "YYYY-MM-DDTHH:mm"
}
    
    function onSubmit(e) {
        e.preventDefault()
        const newRes = {
        mid: formData.mid,
        member: formData.member,
        guests: guestList.length + 1,
        notes: formData.notes || "",
        room: formData.room,
        arrival: new Date(formData.arrival).toISOString().slice(0, 16),
        guest_array: guestList
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
        room: '',
        arrival: '',
        guest_array: [],
        })
        setGuestList([])
    }

const onCancel = () => {
    onClear()
    navigate('/welcome')
    }

    return (
        <>
            <form onSubmit={onSubmit}>
        <h2> Reservation Details </h2>
        <label htmlFor="arrival"> MEMBER NAME </label>
  <input
    type="text"
    name="member"
    id="member"
    onChange={onFormChange}
    value={formData.member}
    placeholder="Member name..."
  />


            <label htmlFor="room"> ROOM </label>
            <select name="room" id="room" onChange={onFormChange} value={formData.room}>
               <option disabled value=""> Select room.... </option> 
            <option value="a"> A </option>
              <option value="b"> B </option>
                <option value="c"> C </option>
                  <option value="d"> D </option>
                    <option value="e"> E </option>
            </select>

                <label htmlFor="arrival"> ARRIVAL </label>
                <input type="datetime-local" name="arrival" id="arrival" onChange={onFormChange} value={formData.arrival ? formData.arrival.slice(0, 16) : ''}        min="2025-06-18T22:00"
       max="2025-12-31T22:00"
       step="900"/> 

               <h2> Party Info </h2>
        <label htmlFor="guest_list"> GUESTS </label>
{formData.member && (
  <em>
    <strong>{guestList.length + 1}</strong> (incl. {formData.member})
  </em>
)}
        <GuestFieldInputButtons 
            addInput={addInput}
            removeInput={removeInput}
        />

{guestList.map((name, i) => (
  <input
    key={i}
    type="text"
    value={name}
    placeholder={`Guest #${i + 1}`}
    onChange={e => {
      const updated = [...guestList];
      updated[i] = e.target.value;
      setGuestList(updated);
    }}
  />
))}

                <label htmlFor="notes">NOTES </label>
                <input type="text" name="notes" id="notes" onChange={onFormChange} value={formData.notes} placeholder="Additional notes and info..." />
            



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
