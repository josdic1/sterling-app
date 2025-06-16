import App from "./App.jsx"
import Error from "./pages/Error.jsx"
import ReservationEdit from "./pages/ReservationEdit.jsx"
import ReservationForm from "./pages/ReservationForm.jsx"
import ReservationItem from "./pages/ReservationItem.jsx"
import ReservationsList from "./pages/ReservationsList.jsx"


const routes = [
  { 
    path: "/", 
    element: <App />, 
    errorElement: <Error />, 
    children: [
      { path: "/reservations", element: <ReservationsList /> },
      { path: "/reservations/new", element: <ReservationForm /> },
      { path: "/reservations/edit/:id", element: <ReservationEdit /> },
      { path: "/reservations/view/:id", element: <ReservationItem /> },
  ] }
]

export default routes
