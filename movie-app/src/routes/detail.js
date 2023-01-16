import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieDetail from '../components/MovieDetail'
import Header from '../components/Header'

function Detail() {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const movieDetailURL = `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        fetch(movieDetailURL)
            .then(response => response.json())
            .then(json => {
                console.log(json.data.movie)
                setMovie(json.data.movie)
                setLoading(false)
            })
    }, [id])

    return (
        <div>
            <Header />
            {loading ?
                <h1>Loading...</h1> :
                <MovieDetail
                    title={movie.title}
                    coverImg={movie.medium_cover_image}
                    summary={movie.description_full}
                    whenUploaded={movie.date_uploaded}
                    downloads={movie.download_count}
                    url={movie.url}
                />
            }
        </div>
    )
}

export default Detail