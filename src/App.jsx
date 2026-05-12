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

//Inception, Il Padrino, Titanic, Batman, Interstellar, Pulp Fiction

const [movies, setMovies] = useState(initialMovies)

  return (
    <>

    <select>
      <option value="Inception">Inception</option>
      <option value="Il Padrino">Il Padrino</option>
      <option value="Titanic">Titanic</option>
      <option value="Batman">Batman</option>
      <option value="Interstellar">Interstellar</option>
      <option value="Pulp Fiction">Pulp Fiction</option>
    </select>
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
