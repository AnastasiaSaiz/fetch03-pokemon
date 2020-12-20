import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

const Tipo = ({ url }) => {
  const [pokemon, setPokemon] = useState([])
  useEffect(() => {
    fetch(url).then((res) => res.json()).then((res) => {
      setPokemon(res.pokemon)
    })
  }, [url]);

  return (
    <div>
      <p>{pokemon[Math.floor(Math.random() * pokemon.lenght)].pokemon.name}</p>
      <p>{pokemon[Math.floor(Math.random() * pokemon.lenght)].pokemon.name}</p>
      <p>{pokemon[Math.floor(Math.random() * pokemon.lenght)].pokemon.name}</p>
    </div>
  )
}

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("")

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/type/").then((res) => res.json()).then((res) => {
      setData(res.results)
    })
  }, [])

  const tipos = data.map(tipo => {
    return <option value={tipo.url}>{tipo.name}</option>
  })
  const handleChange = (e) => {
    setUrl(e.target.value)
  }

  return (
    <>
      <select onChange={handleChange}>{tipos}</select>
      <Tipo url={url} />
    </>
  )
}

export default App;
