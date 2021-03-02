import api from "api"
import {useState, useEffect} from 'react'

const Main = () => {
  const [fotos, setFotos] = useState([]);

  useEffect(() => {
    (async () => {
      const fotosData = await api.index()
      setFotos(() => fotosData)
    })()
  },
  // Do not run ever again after the initial render
  [])

  return (
    <main>
      {/* TODO: Map over `fotos` and `render` a Figure for each photo */
      }
    </main>
  )
}

export default Main

