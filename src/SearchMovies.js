import React, { useState } from 'react'
import Card from './components/Card'

export default function SearchMovies() {

  const [query, setQuery] = useState('')
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault()
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=c707e5a2&s=${query}`
    try {
      const res = await fetch(url)
      const data = await res.json()
      console.log(data.Search)
      setMovies([...data.Search])
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">Nombre de la película</label>
        <input
          className="input"
          type="text" name="query"
          placeholder="i.e. Jurassic World"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">Buscar</button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.Poster !== "N/A").map(movie => (
          <Card movie={movie} key={movie.imdbID} />
        ))}
      </div>
    </>
  )
}