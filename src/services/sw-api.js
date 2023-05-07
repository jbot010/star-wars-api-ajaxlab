const baseURL = 'https://swapi.dev/api'

export async function getStarshipList() {
  const res = await fetch(`${baseURL}/starships/`)
  console.log('response ==>', res)
  return res.json()  
}