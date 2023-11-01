import { useEffect, useState } from "react"
import BandAdd from "./components/BandAdd"
import ListBand from "./components/ListBand"
import io from "socket.io-client";

const conectServerSocket = () => {
  const socket = io.connect('http://localhost:8080', {
    transports: ['websocket']
  });
  return socket
}
function App() {
  const [Online, setOnline] = useState(false)
  const [socket] = useState(conectServerSocket())
  const [bandList, setBandList] = useState([])
  useEffect(() => {
    setOnline(socket.connected)
  }, [socket])

  useEffect(() => {
    socket.on('connect', () => {
      setOnline(true)
    })
  }, [socket])

  useEffect(() => {
    socket.on('disconnect', () => {
      setOnline(false)
    })
  }, [socket])
  useEffect(() => {
    socket.on('currentBands', (data) => {
      setBandList(data)
    })
  }, [socket])


  const handleVote = (id) => {
    socket.emit('vote-band', id)
  }

  const onChangeSoket = (id, name) => {
    socket.emit('change-band-name', { id, name })

  }

  const removeBand = (id) => {
    socket.emit('remove-band', id)
  }

  const addBand = (name) => {
    socket.emit('add-band', name)
  }
  return (
    <div className="container">
      <div className="alert">
        <p>
          Service status: {
            Online ? <span className="text-success">Online</span> : <span className="text-danger">Offline</span>
          }
        </p>
      </div>
      <h1>BandName</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <ListBand bandList={bandList} handleVote={handleVote} onChangeSoket={onChangeSoket} removeBand={removeBand} />
        </div>
        <div className="col-4">
          <BandAdd addBand={addBand} />
        </div>
      </div>
    </div>
  )
}

export default App
