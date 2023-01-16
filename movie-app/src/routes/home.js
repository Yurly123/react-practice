import { useEffect, useState } from "react";
import Movie from '../components/Movie'
import Header from '../components/Header'

function Home() {
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const MOVIE_API_URL = 'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(json => {
        setMovies(json.data.movies)
        setLoading(false)
      })
  }, [])

  return (
    <div>
      <Header />
      {loading ?
        <h1>Loading...</h1> :
        movies.map(movie => <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          summary={movie.summary}
          coverImg={movie.medium_cover_image}
          genres={movie.genres}
        />)
      }
    </div>
  )
}

export default Home