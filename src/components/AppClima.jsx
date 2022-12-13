import useClima from '../hooks/useClima'
import Formulario from './Formulario'
import Resultado from './Resultado'
import Loading from './Loading'

export default function AppClima() {
  const {resultado, cargando, noResponce } =useClima()

  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? <Loading /> : resultado?.name ? <Resultado /> : noResponce ? <p>{noResponce}</p> : <p></p>}
      </main>
    </>
  )
}
