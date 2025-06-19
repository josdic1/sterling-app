import { useState, useEffect } from "react";

function ReservationFilter({ reservations, onFilter }) {
  const [filterObj, setFilterObj] = useState({
    memFilter: "all",
    roomFilter: "all",
    sortVal: "all"
  });

  const [members, setMembers] = useState([]);
  const [rooms, setRooms] = useState([]);


  useEffect(() => {
    const uniqueMembers = [...new Set(reservations.map(res => res.member))].sort();
    setMembers(uniqueMembers);

    const uniqueRooms = [...new Set(reservations.map(res => res.room))].sort();
    setRooms(uniqueRooms);
  }, [reservations]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...filterObj, [name]: value };
    setFilterObj(updated);
    onFilter(updated);
  };



  const handleClear = () => {
    const reset = { memFilter: "all", roomFilter: "all", sortVal: "all" };

    setFilterObj(reset);
    onFilter(reset);
  };

  return (
    <>
      <select name="memFilter" value={filterObj.memFilter} onChange={handleChange}>
        <option value="all">All Members</option>
        {members.map(member => (
          <option key={member} value={member}>{member}</option>
        ))}
      </select>

      <select name="roomFilter" value={filterObj.roomFilter} onChange={handleChange}>
        <option value="all">All Rooms</option>
        {rooms.map(room => (
          <option key={room} value={room}>{room}</option>
        ))}
      </select>
        <select name="sortVal" id="sortVal" value={filterObj.sortVal} onChange={handleChange}>
           <option value="all">Default</option>
         <option value="memAsc">Members ↑ [asc]</option>
          <option value="memDesc">Members ↓ [desc]</option>
        <option value="arrAsc">Arrival ↑ [asc]</option>
          <option value="arrDesc">Arrival ↓ [desc]</option>
      </select>
      <button type="button" onClick={handleClear}>Clear Filter/Sort</button>
    </>
  );
}

export default ReservationFilter;
