import { useParams } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import MemberContext from "../contexts/MemberContext"
import ReservationContext from "../contexts/ReservationContext"

function MemberItem() {

    const { id } = useParams()

    const { members } = useContext(MemberContext)
     const { reservations } = useContext(ReservationContext)

     const [ relatedReservations, setRelatedReservations] = useState([])
    const [ match, setMatch ] = useState({
        id: '',
        member: ''
    })

    useEffect(() => {
          if (!members.length) return; 
        const member_match = members.find(m => m.id === id)
        setMatch(member_match)
    },[id, members])

    useEffect(() => {
       if (!match.id) return;  
            const relatedRes = reservations.filter(r => (
                r.mid === match.id
            ))
            setRelatedReservations(relatedRes)
    },[match, reservations])

    const reservationList = relatedReservations.map(res => (
       <tr key={res.id}>
        <td>{res.id}</td>
         <td>{new Date(res.arrival).toLocaleString([], { 
            hour: '2-digit',
             minute: '2-digit', 
             month: 'numeric', 
             day: 'numeric', 
             year: 'numeric' })}</td>
          <td>{res.room}</td>
           <td>{res.guests}</td>
            <td>{res.notes || ''}</td>
             <td>{res.guest_array.join(", ")}</td>
       </tr>
    ))

return (
<>
<h2>{match.member}'s Reservations</h2>
<table>
    <thead>
        <tr>
            <th>Res ID</th>
            <th>Date</th>
            <th>Room</th>
            <th>Guests</th>
            <th>Notes</th>
            <th>Party</th>
        </tr>
    </thead>
    <tbody>
        {reservationList}
    </tbody>
</table>
</>
)}

export default MemberItem
