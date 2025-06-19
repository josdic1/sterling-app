import { Outlet } from 'react-router-dom'
import ReservationProvider from './providers/ReservationProvider'
import MemberProvider from './providers/MemberProvider'
import CurrentUserProvider from './providers/CurrentUserProvider'
import NavBar from './components/NavBar'
import './App.css'

function App() {



  return (

    <>
    <CurrentUserProvider>
      <header>
      <NavBar />
      </header>
          <main>
          <MemberProvider>
<ReservationProvider>
  <Outlet />
</ReservationProvider>
</MemberProvider>
      </main>
      </CurrentUserProvider>
    </>
  )
}

export default App
