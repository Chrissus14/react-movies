import React from 'react'

export default function Card({ movie }) {
  return (
    <div className="card">
      <img className="card__image" src={movie.Poster} alt={movie.Title} />
      <div className="card__content">
        <h3 className="card__title">{movie.Title}</h3>
        <p><small>AÑO DEL ESTRENO: {movie.Year}</small></p>
      </div>
    </div>
  )
}