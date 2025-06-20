import { NavLink, useNavigate } from "react-router-dom"

import { useContext } from "react"
import CurrentUserContext from "../contexts/CurrentUserContext"
import viteLogo from '/vite.svg'

function NavBar() {
    const { currentUser, setCurrentUser, handleLogOut } = useContext(CurrentUserContext)

    const navigate = useNavigate()

    const currUser = currentUser?.member

    const onLogOut = () => {
        const logout = {
        id: "",
      member: "",
      login: "",
      password: "",
      role: ""
        }
        setCurrentUser(logout)
    
        navigate('/login')
    }


    const navDisplay = 
    <nav>
    <NavLink to="/welcome"> {`${currUser}`} | </NavLink>
        <NavLink to="/reservations/new"> New Reservation |</NavLink>
        <NavLink to="/members"> Members |</NavLink>
        <NavLink to="/calendar"> Calendar |</NavLink>
         <NavLink onClick={onLogOut}> Logout </NavLink>
</nav>



return (
<>
{currUser ? navDisplay : <NavLink to='/login'> Login </NavLink> }
</>
)}

export default NavBar
