import { useState, useEffect } from "react"
import { getStarshipList } from "../../services/sw-api"
import { Link } from "react-router-dom"

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const startshipData = await getStarshipList()
      console.log('list', startshipData.results)
      setStarshipList(startshipData.results)
    }
    fetchStarshipList()
  }, [])

  if (!starshipList.length) return <h1>Loading Starships...</h1>

  const getId = (url) => {
    const id = url.split("https://swapi.dev/api/starships/")[1].replace("/", "")
    return id
  }

  return (
    <main className="starship-list">
      {starshipList.map((starship) => (
        <button key={starship.name} className="starship-container">
          <Link to={`starships/${getId(starship.url)}`}>{starship.name}</Link>
        </button>
      ))}
    </main>
  )
}

export default StarshipList
