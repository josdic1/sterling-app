import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import ReservationContext from "../contexts/ReservationContext"

function ReservationItem() {
    const { reservations } = useContext(ReservationContext)

    const [ match, setMatch ] = useState({
        id: '',
        mid: '',
        member: '',
        guests: 0,
        arrival: '',
        notes: '',
        guest_list: []
    })

    const { id } = useParams()

    useEffect(() => {
        const thisMatch = reservations.find(res => (
        res.id === id
    ))
    setMatch(thisMatch)
    },[reservations, id])

      if (!match) return <h2>Loading...</h2>;

return (
<>
<h1>{id}</h1>
<h5>{match?.id}</h5>
<h5>{match?.mid}</h5>
<h5>{match?.member}</h5>
<h5>{match?.guests}</h5>
<h5>
  {match.arrival
    ? new Date(match.arrival).toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short',
      })
    : 'No arrival time'}
</h5>
<h5>{match?.notes}</h5>
<h5>{match?.guest_list}</h5>
</>
)}

export default ReservationItem
