import ReservationContext from '../contexts/ReservationContext';
import { useState, useEffect, useContext } from 'react';


function ReservationProvider({children}) {

const [ reservations, setReservations ] = useState([])

useEffect(() => {
    fetchReservations()
},[])

async function fetchReservations() {
    try {
        const res = await fetch (`http://localhost:3000/reservations`)
        if(!res.ok) {
            throw new Error("Failed to get a response")
        }
        const data = await res.json()
        setReservations(data)
    }catch (error) {console.error("❌ Caught error:", error);}
}

return (
<>
<ReservationContext.Provider
    value={{ reservations }}
>
    {children}
</ReservationContext.Provider>
</>
)}

export default ReservationProvider
