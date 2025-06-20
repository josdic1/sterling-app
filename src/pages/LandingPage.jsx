import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import CurrentUserContext from "../contexts/CurrentUserContext"
import ReservationContext from "../contexts/ReservationContext"
import ReservationsList from "./ReservationsList"
import CalendarView from "./CalendarView"


function LandingPage() {
  const { currentUser } = useContext(CurrentUserContext)
  const { reservations } = useContext(ReservationContext)
  const navigate = useNavigate()

    useEffect(() => {
       !currentUser?.id ? navigate('/login') : ""
    },[currentUser])


      const filterReservations = (reservationData) => {
        return reservationData.filter(r => r.member === currentUser.member)

        
}



return (
<>
<CalendarView reservationData={filterReservations(reservations)} />
  <ReservationsList filterReservations={filterReservations}/>

</>
)}

export default LandingPage
