import { useEffect, useState } from "react"


const ListBand = ({ bandList, handleVote, onChangeSoket, removeBand }) => {
  const [bands, setBands] = useState(bandList)
  useEffect(() => {
    setBands(bandList)
  }, [bandList])



  const hadleName = (e, band) => {
    const name = e.target.value
    setBands(bands => bands.map(b => b.id === band.id ? { ...b, name } : b))
  }



  const rowsList = (band) => {

    return (<tr key={band.id}>
      <td><button className="btn btn-primary" onClick={() => handleVote(band.id)}>+1</button></td>
      <td><input type="text"
        className="form-control
        " value={band.name}
        onChange={(e) => hadleName(e, band)}
        onBlur={() => onChangeSoket(band.id, band.name)} /></td>
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