import { useState, useEffect, useContext } from "react"
import ReservationContext from "../contexts/ReservationContext"
import ReservationCard from "../components/ReservationCard"
import ReservationFilter from "./ReservationFilter"

function ReservationsList() {
    const { reservations, handleDelete } = useContext(ReservationContext)

const [filteredList, setFilteredList ] = useState([])

useEffect(() => {
 setFilteredList(reservations)
},[reservations])


const reservationData = filteredList.map(res => (
    <ReservationCard key={res.id} reservation={res} handleDelete={handleDelete} />
))


const handleFilter = (obj) => {
  const member = obj.memFilter || "all";
  const room = obj.roomFilter || "all";
  const sortVal = obj.sortVal || "all"; // 🔥 MISSING

const now = new Date();

const filtered = reservations.filter(r => {
  const isUpcoming = new Date(r.arrival) >= now;
  const memMatch = member === "all" || r.member === member;
  const roomMatch = room === "all" || r.room === room;
  return isUpcoming && memMatch && roomMatch;
});

  let thisFiltered = [];
  if (sortVal === "memAsc") {
    thisFiltered = [...filtered].sort((a, b) => a.member.localeCompare(b.member));
  } else if (sortVal === "memDesc") {
    thisFiltered = [...filtered].sort((a, b) => b.member.localeCompare(a.member));
  } else if (sortVal === "arrAsc") {
    thisFiltered = [...filtered].sort((a, b) => new Date(a.arrival) - new Date(b.arrival));
  } else if (sortVal === "arrDesc") {
    thisFiltered = [...filtered].sort((a, b) => new Date(b.arrival) - new Date(a.arrival));
  } else {
    thisFiltered = [...filtered];
  }

  setFilteredList(thisFiltered); // ✅ fixed
};


return (
<>
<section>
    <ReservationFilter reservations={reservations} onFilter={handleFilter}/>
</section>
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
{reservationData}
        </tbody>
    </table>
</>)}


export default ReservationsList
