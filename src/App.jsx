import { Outlet } from 'react-router-dom'
import ReservationProvider from './providers/ReservationProvider'
import MemberProvider from './providers/MemberProvider'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <MemberProvider>
      <ReservationProvider>
        <header>
          <NavBar />
        </header>
        <main>
          <Outlet />
        </main>
      </ReservationProvider>
    </MemberProvider>
  )
}

export default App