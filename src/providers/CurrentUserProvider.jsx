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
const [ isHidden, setIsHidden ] = useState(false)

useEffect(() => {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(currentUser))
}, [currentUser])

const loggedIn = !!currentUser?.id



return (
<>
<CurrentUserContext.Provider value={{ loggedIn, currentUser, setCurrentUser, isHidden, setIsHidden }}>
  {children}
</CurrentUserContext.Provider>
</>
)}

export default CurrentUserProvider
