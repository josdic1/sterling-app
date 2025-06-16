import { NavLink } from "react-router-dom"
import viteLogo from '/vite.svg'

function NavBar() {

return (
<>
<img src={viteLogo} alt="logo" style={{ width: "230px", padding: "50px" }}/>
<nav>
    <NavLink to="/reservations"> Home | </NavLink>
        <NavLink to="/reservations/new"> New Reservation |</NavLink>
</nav>
</>
)}

export default NavBar
