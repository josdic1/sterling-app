import { useRouteError } from "react-router-dom"
import NavBar from "../components/NavBar"

function Error() {
  const error = useRouteError()

  return (
    <>
      <header><NavBar /></header>
      <main>
        <h2>{error?.message || "N/A message"}</h2>
        <h3>{error?.type || "N/A type"}</h3>
        <h4>{error?.text || "N/A text"}</h4>
      </main>
    </>
  )
}

export default Error