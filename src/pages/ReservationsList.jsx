import { useContext } from "react"
import ReservationContext from "../contexts/ReservationContext"
import ReservationCard from "../components/ReservationCard"

function ReservationsList() {
    const { reservations } = useContext(ReservationContext)

    const reservationList = reservations.map(r => (
        <ReservationCard key={r.id} reservation={r} />
    ))

return (
<>

</>
)}

export default ReservationsList
