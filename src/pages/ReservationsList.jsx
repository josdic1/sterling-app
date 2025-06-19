import { useContext } from "react"
import ReservationContext from "../contexts/ReservationContext"
import ReservationCard from "../components/ReservationCard"

function ReservationsList() {
    const { reservations, handleDelete } = useContext(ReservationContext)

const sortedReservations = [...reservations].sort(
  (a, b) => new Date(a.arrival) - new Date(b.arrival)
);

const reservationList = sortedReservations.map(r => (
  <ReservationCard key={r.id} reservation={r} onDeleteClick={handleDelete} />
));

return (
<>
    <table>
        <thead>
            <tr>
                <th>NAME</th>
                <th>ARRIVAL</th>
                <th>GUESTS</th>
                <th>ROOM</th>
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
