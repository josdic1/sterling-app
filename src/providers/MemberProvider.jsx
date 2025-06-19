import MemberContext from '../contexts/MemberContext';
import { useState, useEffect } from 'react';


function MemberProvider({children}) {

    const [ members, setMembers ] = useState([])  

 useEffect(() => {
    fetchMembers()
},[])

async function fetchMembers() {
    try {
        const res = await fetch (`http://localhost:3000/members`)
        if(!res.ok) {
            throw new Error("Failed to get a response")
        }
        const data = await res.json()
        setMembers(data)
    }catch (error) {console.error("❌ Caught error:", error);}
}

async function handleNew(newMem) {
    try {
        const r = await fetch(`http://localhost:3000/members`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMem)
        })
        if(!r.ok) {
            throw new Error("💥 Error");
        }
        const data = await r.json()
        const updated = [...members, data]
        setMembers(updated)
    } catch (error) {console.error("❌ Caught error:", error);}
}

async function handleDelete(memId) {
    try {
      const r = await fetch(`http://localhost:3000/members/${memId}`, {
            method: 'DELETE'
        })
        if(!r.ok) {
            throw new Error("💥 Error");
        }
        const data = await r.json()
        const updated = members.filter(m => m.id !== data.id)
        setMembers(updated)
    }catch (error) {console.error("❌ Caught error:", error);}
}

async function handleEdit(mem) {
    try {
        const r = await fetch(`http://localhost:3000/members/${mem.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mem)
        })
        if(!r.ok) {
            throw new Error("💥 Error");
        }
        const data = await r.json()
        const updated = members.map(m => (
            m.id === data.id ? data : m
        ))
        setMembers(updated)
    } catch (error) {console.error("❌ Caught error:", error);}
}

return (
<>
<MemberContext.Provider
    value={{ members, handleNew, handleDelete, handleEdit }}
>
    {children}
</MemberContext.Provider>
</>
)}

export default MemberProvider
