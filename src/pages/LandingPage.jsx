import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import CalendarView from "./CalendarView";
import ReservationsList from "./ReservationsList";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ReservationContext from "../contexts/ReservationContext";


function LandingPage() {
  const { currentUser, isHidden } = useContext(CurrentUserContext);
  const { reservations } = useContext(ReservationContext);

  const navigate = useNavigate()

  const currRole = currentUser?.role;
  const userReservations = reservations.filter(r => r.mid === currentUser?.id);
  const data = currRole === "admin" ? reservations : userReservations;

    useEffect(() => {
      !currentUser?.id ? navigate('/Login') : ''
  },[])

  return (
    <>


<section className="dashboard">
  {!isHidden ? <CalendarView reservations={data} /> : ""}
  <ReservationsList reservations={data} />
</section>
    </>
  );
}

export default LandingPage;
