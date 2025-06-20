import { useContext } from "react"
import { NavLink } from "react-router-dom"
import CurrentUserContext from "../contexts/CurrentUserContext"

function CurrentUser() {
    const { currentUser } = useContext(CurrentUserContext)

    const currUser = currentUser?.member

    const loginLink = <NavLink to='/login'>Please login</NavLink>

return (
<>
<h3>{currUser ? `Welcome Back, ${currUser}!`: loginLink}</h3>
</>
)}

export default CurrentUser
