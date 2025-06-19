import CurrentUserContext from '../contexts/CurrentUserContext';
import { useState, useEffect } from 'react';


function CurrentUserProvider({children}) {

      const [ currentUser, setCurrentUser ] = useState({
        id: "",
        uid: "",
        member: "",
        password: ""
      })  

 const loggedIn = currentUser?.id ? true : false

 useEffect(() => {
    fetchCurrentUser()
 },[])

async function fetchCurrentUser() {
    try {
        const res = await fetch (`http://localhost:3000/currentUser`)
        if(!res.ok) {
            throw new Error("Failed to get a response")
        }
        const data = await res.json()
        setCurrentUser(data)
    }catch (error) {console.error("❌ Caught error:", error);}
}


return (
<>
<CurrentUserContext.Provider
    value={{ loggedIn, currentUser, setCurrentUser }}
>
    {children}
</CurrentUserContext.Provider>
</>
)}

export default CurrentUserProvider
