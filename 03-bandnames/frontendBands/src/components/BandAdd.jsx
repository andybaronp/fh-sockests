import { useState } from "react"

const BandAdd = ({ addBand }) => {
  const [namge, setNamge] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    if (namge.trim().length <= 1) return

    addBand(namge)
    setNamge('')
  }
  return (
    <>
      <h3>Agregar banda</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre de la banda</label>
          <input type="text" className="form-control" id="name" aria-describedby="emailHelp" value={namge} onChange={(e) => setNamge(e.target.value)} />
        </div>
      </form>
    </>
  )
}

export default BandAdd