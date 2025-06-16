import { Outlet } from 'react-router-dom'
import ReservationProvider from './providers/ReservationProvider'
import MemberProvider from './providers/MemberProvider'
import NavBar from './components/NavBar'
import './App.css'

function App() {

  return (
    <>
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
    </>
  )
}

export default App
