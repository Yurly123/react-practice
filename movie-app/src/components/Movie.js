import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import css from './Movie.module.css'
const { container, headname, coverimg, description } = css

function Movie({ id, title, coverImg, summary, genres }) {
    return (
        <div className={container}>
            <h2 className={headname}>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <img src={coverImg} className={coverimg} alt={title} />
            <div className={description}>
                <p>{summary}</p>
                <ul>
                    {genres.map(genre => <li key={genre}>{genre}</li>)}
                </ul>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie