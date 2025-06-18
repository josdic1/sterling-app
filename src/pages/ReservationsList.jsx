import { useContext } from "react"
import ReservationContext from "../contexts/ReservationContext"
import ReservationCard from "../components/ReservationCard"

function ReservationsList() {
    const { reservations, handleDelete } = useContext(ReservationContext)

    const reservationList = reservations.map(r => (
        <ReservationCard key={r.id} reservation={r} onDeleteClick={handleDelete}/>
    ))

return (
<>
    <table>
        <thead>
            <tr>
                <th>MEMBER ID</th>
                <th>NAME</th>
                <th>ARRIVAL</th>
                <th>GUESTS</th>
                <th>NOTES</th>
                <th>VIEW</th>
                <th>EDIT</th>
                <th>DELETE</th>
            </tr>
        </thead>
        <tbody>
            {reservationList}
        </tbody>
    </table>
</>
)}

export default ReservationsList
