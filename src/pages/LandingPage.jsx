import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import CalendarView from "./CalendarView"
import CurrentUserContext from "../contexts/CurrentUserContext"
import ReservationContext from "../contexts/ReservationContext"
import ReservationsList from "./ReservationsList"



function LandingPage() {
  const { currentUser } = useContext(CurrentUserContext)
  const { reservations } = useContext(ReservationContext)
  const navigate = useNavigate()

    useEffect(() => {
       !currentUser?.id ? navigate('/login') : ""
    },[currentUser])

    const currRole = currentUser?.role

const userReservations = reservations.filter(r => r.mid === currentUser?.id)

  return (
    <>
            <ReservationsList reservations={currRole === "admin" ? reservations :userReservations} />
      <CalendarView reservations={currRole === "admin" ? reservations :userReservations} />
    </>
  )
}

export default LandingPage
