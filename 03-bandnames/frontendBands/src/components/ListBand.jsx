import { useContext, useEffect, useState } from "react"
import { SockectContex } from "../context/SocetContext"


const ListBand = () => {
  const [bands, setBands] = useState([])
  const { socket } = useContext(SockectContex)
  useEffect(() => {
    socket.on('currentBands', (data) => {
      setBands(data)
    })

    return () => socket.off('currentBands')
  }, [socket])



  const hadleName = (e, band) => {
    const name = e.target.value
    setBands(bands => bands.map(b => b.id === band.id ? { ...b, name } : b))
  }

  const handleBlur = (id, name) => {
    socket.emit('change-band-name', { id, name })
  }

  const handleVote = (id) => {
    socket.emit('vote-band', id)
  }

  const removeBand = (id) => {
    socket.emit('remove-band', id)
  }
  const rowsList = (band) => {

    return (<tr key={band.id}>
      <td><button className="btn btn-primary" onClick={() => handleVote(band.id)}>+1</button></td>
      <td><input type="text"
        className="form-control
        " value={band.name}
        onChange={(e) => hadleName(e, band)}
        onBlur={() => handleBlur(band.id, band.name)} /></td>
      <td><h4>{band.votes}</h4></td>
      <td><button className="btn btn-danger" onClick={() => removeBand(band.id)}>Borrar</button></td>
    </tr>)

  }
  return (
    <>
      <h3>Lista de bandas</h3>
      <hr />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Votos</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {bands.map(band => rowsList(band))}
        </tbody>
      </table>
    </>
  )
}

export default ListBand