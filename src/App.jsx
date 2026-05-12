import { useState } from 'react'


function App() {
  

  const initialMovies=[
  { id: 1, title: 'Inception', genre: 'Fantascienza' },
  { id: 2, title: 'Il Padrino', genre: 'Thriller' },
  { id: 3, title: 'Titanic', genre: 'Romantico' },
  { id: 4, title: 'Batman', genre: 'Azione' },
  { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
  { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
]

//Fantascienza, Thriller, Romantico, Azione, Fantascienza, Thriller

const [movies, setMovies] = useState(initialMovies)

  return (
    <>

    <div>
      <select>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
      </select>
    </div>
    
    {
      movies.map( movie =>(
        <div key={movie.id}>
          {movie.title}
        </div>
      ))
    }
      
    </>
  )
}

export default App
