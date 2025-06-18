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

async function handleNew(newRes) {
    try {
        const res = await fetch(`http://localhost:3000/reservations/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRes)
        })
        if(!res.ok){
            throw new Error("💥 Error");
        }
        const data = await res.json()
        const updated = [...reservations, data]
        setReservations(updated)
    }catch (error) {console.error("❌ Caught error:", error);}
}

async function handleEdit(updatedRes) {
    try {
         const res = await fetch(`http://localhost:3000/reservations/${updatedRes.id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedRes)
        })
        if(!res.ok) {
              throw new Error("💥 Error");
        }
        const data = await res.json()
        const updated = reservations.map(r => (
            r.id === data.id ? data : r
        ))
        setReservations(updated)
    }catch (error) {console.error("❌ Caught error:", error);}
}

async function handleDelete(resId) {
    try {
                const res = await fetch(`http://localhost:3000/reservations/${resId}`, {
                    method: "DELETE"
        })
        if(!res.ok) {
            throw new Error("💥 Error");
        }
        const updated = reservations.filter(r => (
            r.id !== resId
        ))
        setReservations(updated)
    }catch (error) {console.error("❌ Caught error:", error);}
}

return (
<>
<ReservationContext.Provider
    value={{ reservations, handleNew, handleEdit, handleDelete }}
>
    {children}
</ReservationContext.Provider>
</>
)}

export default ReservationProvider


