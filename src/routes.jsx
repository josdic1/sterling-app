import { Navigate } from "react-router-dom"
import App from "./App.jsx"
import CalendarView from "./pages/CalendarView.jsx"
import CurrentUserProvider from './providers/CurrentUserProvider'
import Error from "./pages/Error.jsx"
import LandingPage from "./pages/LandingPage.jsx"
import Login from "./pages/Login.jsx"
import MemberList from "./pages/MemberList.jsx"
import MemberItem from "./pages/MemberItem.jsx"
import MemberEdit from "./pages/MemberEdit.jsx"
import MemberForm from "./pages/MemberForm.jsx"
import ReservationEdit from "./pages/ReservationEdit.jsx"
import ReservationForm from "./pages/ReservationForm.jsx"
import ReservationItem from "./pages/ReservationItem.jsx"
import ReservationsList from "./pages/ReservationsList.jsx"

const routes = [
  { 
    path: "/", 
    element: 
    <CurrentUserProvider>
    <App />
    </CurrentUserProvider>, 
    errorElement: <Error />, 
    children: [
      {
        index: true,
        element: <Navigate to="/welcome" replace /> 
      },
      { path: "/reservations", element: <ReservationsList /> },
      { path: "/reservations/new", element: <ReservationForm /> },
      { path: "/reservations/edit/:id", element: <ReservationEdit /> },
      { path: "/reservations/view/:id", element: <ReservationItem /> },
      { path: "/members", element: <MemberList /> },
      { path: "/members/new", element: <MemberForm /> },
      { path: "/members/edit/:id", element: <MemberEdit /> },
      { path: "/members/view/:id", element: <MemberItem /> },
      { path: "/calendar", element: <CalendarView /> },
      { path: "/welcome", element: <LandingPage /> },
      { path: "/login", element: <Login /> }

  ] }
]

export default routes
