import { useState } from 'react'
import useClima from '../hooks/useClima'


export default function Formulario() {
  const [error, setError] = useState('')
  const { busqueda, datosBusqueda, consultarClima } =useClima()
  const { ciudad, pais } = busqueda

  const handleSubmit = e => {
    e.preventDefault()
    if(Object.values(busqueda).includes('')){
      setError('todos los Campos son obligatorios')
      return
    }
    setError('')
    consultarClima(busqueda)
  }
  return (
    <div className="contenedor">
      {error && <p>{error}</p>}
      <form
      onSubmit={handleSubmit}
      >
          <div className="campo">
            <label htmlFor='ciudad'>Ciudad</label>
            <input 
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
            />
          </div>
          <div className="campo">
            <label htmlFor="pais">Pais</label>
            <select
              id="pais"
              name="pais"
              onChange={datosBusqueda}
              value={pais}
            >
              <option value="">-- Elige un pais --</option>
              <option value="CL">chile</option>
              <option value="US">Estados Unidos</option>
              <option value="MX">Mexico</option>
              <option value="AR">Argentina</option>
              <option value="CO">Colombia</option>
              <option value="CR">Costa Rica</option>
              <option value="ES">España</option>
              <option value="PE">peru</option>
            </select>
          </div>
          <input 
          type="submit"
          value="consultar Clima"
          />
      </form>
    </div>
  )
}
