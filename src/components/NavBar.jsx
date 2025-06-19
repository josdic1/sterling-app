import { NavLink } from "react-router-dom"

import viteLogo from '/vite.svg'

function NavBar() {



return (
<>

<nav>
    <NavLink to="/reservations"> Home | </NavLink>
        <NavLink to="/reservations/new"> New Reservation |</NavLink>
        <NavLink to="/members"> Members |</NavLink>
        <NavLink to="/calendar"> Calendar |</NavLink>
         <NavLink to="/login"> Login </NavLink>
</nav>
</>
)}

export default NavBar
