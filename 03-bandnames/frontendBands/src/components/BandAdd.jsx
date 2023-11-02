import { useContext, useState } from "react"
import { SockectContex } from "../context/SocetContext"

const BandAdd = () => {
  const { socket } = useContext(SockectContex)
  const [nameBand, setNameBand] = useState('')


  const onSubmit = (e) => {
    e.preventDefault()
    if (nameBand.trim().length <= 1) return

    socket.emit('add-band', nameBand)
    setNameBand('')
  }
  return (
    <>
      <h3>Agregar banda</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre de la banda</label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={nameBand} onChange={(e) => setNameBand(e.target.value)} />
        </div>
      </form>
    </>
  )
}

export default BandAdd