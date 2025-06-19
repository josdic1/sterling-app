import { useNavigate } from "react-router-dom"

function ReservationCard({ reservation, onDeleteClick }) {

    const navigate = useNavigate()

    const onClick = (e) => {
        const { name, id } = e.target
        switch(name) {
            case "view":
                navigate(`/reservations/view/${id}`)
                break;
            case "edit":
                navigate(`/reservations/edit/${id}`)
                break;
            case "delete":
                onDeleteClick(id)
                break;
            default:
                break;
        }
    }

return (
<>
<tr id={reservation.id}>
<td>{`${reservation.member} (${reservation.mid})`}</td>
<td>{new Date(reservation.arrival).toLocaleString([], {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit'
})}</td>
<td>{reservation.guests}</td>
<td>{reservation.room}</td>

<td>
  <button type="button" onClick={onClick} id={reservation.id} name="view" className="btn red">
    👓
  </button>
</td>
<td>
  <button type="button" onClick={onClick} id={reservation.id} name="edit" className="btn orange">
    ✏️
  </button>
</td>
<td>
  <button type="button" onClick={onClick} id={reservation.id} name="delete" className="btn yellow">
    🚫
  </button>
</td>
</tr>
</>
)}

export default ReservationCard
