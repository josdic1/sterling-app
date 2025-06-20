import CurrentUserContext from '../contexts/CurrentUserContext';
import { useState, useEffect } from 'react';


function CurrentUserProvider({children}) {

      const LOCAL_KEY = 'sterling-user'

const [currentUser, setCurrentUser] = useState(() => {
  const saved = localStorage.getItem(LOCAL_KEY)
  return saved ? JSON.parse(saved) : {
    id: "",
    uid: "",
    member: "",
    password: "",
    role: ""
  }
})
const [ calendarIsHidden, setCalendarIsHidden ] = useState(true)
const [ filterIsHidden, setFilterIsHidden ] = useState(true)

useEffect(() => {
  if (!currentUser?.id) {
    const tempUser = {
      id: "m001", // or whatever user you want pre-logged-in
      uid: "allen123",
      member: "Allen",
      password: "secret", // optional
      role: "member" // optional
    }
    setCurrentUser(tempUser)
  }
}, [])
const loggedIn = !!currentUser?.id



return (
<>
<CurrentUserContext.Provider value={{ loggedIn, currentUser, setCurrentUser, calendarIsHidden, setCalendarIsHidden, filterIsHidden, setFilterIsHidden }}>
  {children}
</CurrentUserContext.Provider>
</>
)}

export default CurrentUserProvider
