import { NavLink } from "react-router-dom"
import viteLogo from '/vite.svg'

function NavBar() {

return (
<>
<img src={viteLogo} alt="logo" style={{ width: "230px", padding: "50px" }}/>
<nav>
    <NavLink to="/reservations"> Home | </NavLink>
        <NavLink to="/reservations/new"> New Reservation |</NavLink>
        <NavLink to="/members"> Members |</NavLink>
        <NavLink to="/calendar"> Calendar |</NavLink>
</nav>
</>
)}

export default NavBar
