import { useState, useEffect, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ReservationContext from "../contexts/ReservationContext"

function ReservationEdit() {
    const { reservations, handleEdit } = useContext(ReservationContext)

    const [ match, setMatch ] = useState({
            id: '',
            mid: '',
            member: '',
            arrival: '',
            guests: 0,
            notes: '',
            guest_list: [],
        })

    const { id } = useParams()

        const navigate = useNavigate()

    useEffect(() => {
  const thisMatch = reservations.find(res => res.id === id);

  if (!thisMatch) return;

  setMatch({
    ...thisMatch,
  });
}, [reservations, id]);

    const onFormChange = (e) => {
    const { name, value } = e.target;
    setMatch(prev => ({
        ...prev,
        [name]: value
        }));
    };

  const onSubmit = (e) => {
  e.preventDefault();
  const updatedRes = {
    ...match,
  };
  handleEdit(updatedRes);
  onCancel()
};

    const onClear = () => {
        setMatch({
            mid: '',
            member: '',
            guests: 0,
            notes: '',
            arrival: '',
            guest_list: []
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
                <input disabled type="text" name="mid" id="mid" onChange={onFormChange} value={match?.mid || ''} placeholder="Member Id..." />

                <label htmlFor="member">MEMBER_NAME: </label>
                <input type="text" name="member" id="member" onChange={onFormChange} value={match?.member || ''} placeholder="Member name..." />

                <label htmlFor="arrival">ARRIVAL: </label>
                <input type="datetime-local" name="arrival" id="arrival" onChange={onFormChange} value={match.arrival ? match.arrival.slice(0, 16) : ''}        min="2025-06-16T09:00"
       max="2025-12-31T22:00"
       step="900"/> 

                <label htmlFor="guests">GUEST COUNT (incl. member): </label>
                <input type="number" name="guests" id="guests" onChange={onFormChange} value={match?.guests || 0} placeholder="Total party #..." />

                <label htmlFor="notes">NOTES: </label>
                <input type="text" name="notes" id="notes" onChange={onFormChange} value={match?.notes || ''} placeholder="Additional notes and info..." />

                <label htmlFor="guest_list">PARTY: </label>
      <input type="text" name="guest_list" id="guest_list" onChange={onFormChange} value={match?.guest_list || []} placeholder="Guest list..." />


                <section>
                    <button type="submit" > Update </button>
    
                    <button type="button" onClick={onCancel} > Cancel </button>
                </section>
            </form>
</>
)}

export default ReservationEdit
