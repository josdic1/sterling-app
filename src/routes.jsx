import App from "./App.jsx"
import Error from "./pages/Error.jsx"
import ReservationsList from "./pages/ReservationsList.jsx"

const routes = [
  { 
    path: "/", 
    element: <App />, 
    errorElement: <Error />, 
    children: [
      { path: "/reservations", element: <ReservationsList /> }
  ] }
]

export default routes
