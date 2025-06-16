import { NavLink } from "react-router-dom"

function NavBar() {

return (
<>
<nav>
    <NavLink to="/"> Home </NavLink>
    <NavLink to="/reservations"> Reservations </NavLink>
</nav>
</>
)}

export default NavBar
