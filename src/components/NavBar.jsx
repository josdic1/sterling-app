import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import ForkKnifeLogo from "./ForkKnifeLogo";
import { FiCalendar, FiFilter } from "react-icons/fi";

function NavBar() {
  const { currentUser, setCurrentUser, filterIsHidden, setFilterIsHidden, calendarIsHidden, setCalendarIsHidden } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const onLogout = () => {
    setCurrentUser({ id: "", uid: "", member: "", password: "", role: "" });
    navigate("/login");
  };

  const isLoggedIn = !!currentUser?.id;

  return (
    <header className="nav-header">
      <NavLink to="/welcome">
        <ForkKnifeLogo />
      </NavLink>

      {isLoggedIn && (
        <section className="dashboard-header" style={{ display: "flex", gap: "1rem" }}>
          <NavLink to="/reservations/new" className="book-button">
            ＋ Book New
          </NavLink>
          <button
            onClick={() => setCalendarIsHidden(!calendarIsHidden)}
            className={`calendar-button ${calendarIsHidden ? "active" : ""}`}
            title="Toggle calendar view"
          >
            <FiCalendar size={20} />
          </button>
               <button
            onClick={() => setFilterIsHidden(!filterIsHidden)}
            className={`filter-button ${filterIsHidden ? "active" : ""}`}
            title="Toggle filter view"
          >
            <FiFilter size={20} />
          </button>
        </section>
      )}

      {isLoggedIn ? (
        <div className="nav-user">
          <nav className="nav-links">
            {currentUser.role === "admin" && (
              <NavLink to="/members">Members</NavLink>
            )}
            <button onClick={onLogout}>
              {`Logout (${currentUser.member})`}
            </button>
          </nav>
        </div>
      ) : (
        <span>Please log in</span>
      )}
    </header>
  );
}

export default NavBar;