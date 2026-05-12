import { useState, useEffect } from 'react'


function App() {
  

  const initialMovies=[
    { id: 1, title: 'Inception', genre: 'Fantascienza' },
    { id: 2, title: 'Il Padrino', genre: 'Thriller' },
    { id: 3, title: 'Titanic', genre: 'Romantico' },
    { id: 4, title: 'Batman', genre: 'Azione' },
    { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
    { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
  ]

  const [movies, setMovies] = useState(initialMovies)
  const [genere, setGenere]=useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log(genere);

    
    let filteredData = initialMovies;
    // filter data by genre
    if (genere) {
      //console.log('Filter the data by genre');
      filteredData = initialMovies.filter(movie => movie.genre.toLowerCase() == genere.toLowerCase())
    }

    if(search){
      console.log('the user searched:', search);
      filteredData = filteredData.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
     
    }

    console.log(filteredData);
    setMovies(filteredData);

  }, [genere, search])

  return (
    <>

    {/* Filter by Title */}
      <div>
          <label htmlFor="title">Title</label><br />
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search a movie by title" />
      </div>


    {/* Filter by Genre */}
      <div>

        <label htmlFor="genre">Genre</label><br />
        <select name="genre" id="genre" value={genere} onChange={(e) => setGenere(e.target.value)}>
          <option value="">All</option>
          <option value="fantascienza">Fantascienza</option>
          <option value="thriller">Thriller</option>
          <option value="romantico">Romantico</option>
          <option value="azione">Azione</option>
        </select>
      </div>


    {/* Movies List */}
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
