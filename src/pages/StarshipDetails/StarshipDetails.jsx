import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import { getStarshipDetails } from "../../services/sw-api"

const StarshipDetails = () => {
  const { id } = useParams()

  const [starshipDetails, setStarshipDetails] = useState({})

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(id)
      console.log(starshipData)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [id])

  if (!starshipDetails) return <h1>Loading Starships...</h1>

  console.log(id)
  return (
    <>
      <h2>Name: {starshipDetails.name}</h2>
      <h2>Model: {starshipDetails.model}</h2>
      <button><Link to={`/`}>Return</Link></button>
    </>
  )
}

export default StarshipDetails
