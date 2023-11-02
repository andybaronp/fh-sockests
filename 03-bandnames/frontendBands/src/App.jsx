import { useContext } from "react"
import BandAdd from "./components/BandAdd"
import ListBand from "./components/ListBand"
import { SockectContex } from "./context/SocetContext"


function App() {
  const { online } = useContext(SockectContex)

  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status: {
            online ? <span className="text-success">Online</span> : <span className="text-danger">Offline</span>
          }
        </p>
      </div>
      <h1>BandName</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <ListBand />
        </div>

        <div className="col-4">
          <BandAdd />
        </div>
      </div>
    </div>
  )
}

export default App
