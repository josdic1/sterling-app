import { useState, useEffect, useContext } from "react"
import ReservationContext from "../contexts/ReservationContext"
import ReservationCard from "../components/ReservationCard"
import ReservationFilter from "./ReservationFilter"

function ReservationsList() {
    const { reservations, handleDelete } = useContext(ReservationContext)

const [filteredList, setFilteredList ] = useState([])
const [showAll, setShowAll] = useState(false);
const [activeFilter, setActiveFilter] = useState({
  memFilter: "all",
  roomFilter: "all",
  sortVal: "all"
});
useEffect(() => {
  handleFilter({
    memFilter: "all",
    roomFilter: "all",
    sortVal: "all"
  });
}, [reservations, showAll]);

useEffect(() => {
  handleFilter(activeFilter);
}, [reservations, showAll]);

const reservationData = filteredList.map(res => (
    <ReservationCard key={res.id} reservation={res} handleDelete={handleDelete} />
))

const handleFilter = (obj) => {
  setActiveFilter(obj); 

  const member = obj.memFilter || "all";
  const room = obj.roomFilter || "all";
  const sortVal = obj.sortVal || "all";

  const filtered = reservations.filter(r => {
    const isUpcoming = new Date(r.arrival) >= new Date();
    const memMatch = member === "all" || r.member === member;
    const roomMatch = room === "all" || r.room === room;
    return (showAll || isUpcoming) && memMatch && roomMatch;
  });

  let thisFiltered = [...filtered];
  if (sortVal === "memAsc") {
    thisFiltered.sort((a, b) => a.member.localeCompare(b.member));
  } else if (sortVal === "memDesc") {
    thisFiltered.sort((a, b) => b.member.localeCompare(a.member));
  } else if (sortVal === "arrAsc") {
    thisFiltered.sort((a, b) => new Date(a.arrival) - new Date(b.arrival));
  } else if (sortVal === "arrDesc") {
    thisFiltered.sort((a, b) => new Date(b.arrival) - new Date(a.arrival));
  }

  setFilteredList(thisFiltered);
};


return (
<>
<section>
    <ReservationFilter 
    reservations={reservations} 
    onFilter={handleFilter} 
    showAll={showAll} 
    setShowAll={setShowAll}/>
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
