import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ReservationContext from "../contexts/ReservationContext"
import MemberContext from "../contexts/MemberContext"
import GuestFieldInputButtons from "../components/GuestFieldInputButtons"

function ReservationEdit() {
    const { reservations, handleEdit } = useContext(ReservationContext)

    const [ guestList, setGuestList] = useState([])
    const [ formData, setFormData ] = useState({
            id: '',
            mid: '',
            member: '',
            arrival: '',
            guests: 0,
            notes: '',
            room: '',
            guest_array: []
        })

    const { id } = useParams()

        const navigate = useNavigate()

   useEffect(() => {
  const thisMatch = reservations.find(res => res.id === id);
  if (!thisMatch) return;

  setFormData(thisMatch);
  setGuestList(thisMatch.guest_array || []);
}, [reservations, id]);

       const onFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [ name ]: value
        }));
    };

 const addInput = () => {
  setGuestList(prev => [...prev, ""]);
};
const removeInput = () => {
  setGuestList(prev => prev.slice(0, -1));
};
    
function onSubmit(e) {
  e.preventDefault();
  const updatedRes = {
    ...formData,
    guest_array: guestList,
    guests: guestList.length + 1
  };
  handleEdit(updatedRes);
  onCancel();
}

    const onClear = () => {
    setFormData({
        id: '',
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
    navigate('/reservations')
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
  
                    <button type="button" onClick={onCancel} > Cancel </button>
                </section>
            </form>
        </>
    )
}

export default ReservationEdit