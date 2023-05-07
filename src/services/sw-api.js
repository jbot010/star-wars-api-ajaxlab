const baseURL = 'https://swapi.dev/api'

export async function getStarshipList() {
  const res = await fetch(`${baseURL}/starships/`)
  // console.log('response ==>', res)
  return res.json()  
}

export async function getStarshipDetails(id) {
  const res = await fetch(`${baseURL}/starships/${id}`)
  console.log('details response ===>', res)
  return res.json()
}