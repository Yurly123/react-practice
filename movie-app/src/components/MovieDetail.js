import PropTypes from 'prop-types'

function MovieDetail({ title, coverImg, summary, whenUploaded, downloads, url }) {
    return (
        <div>
            <h1>{title}</h1>
            <img src={coverImg} alt={title} />
            <article>
                <p>{summary}</p>
                <p>Upload Date : {whenUploaded}</p>
                <p>Downloads : {downloads}</p>
            </article>
            <a href={url} rel='noreferrer' target='_blank'><button>Go See</button></a>
        </div>
    )
}

MovieDetail.propTypes = {
    title: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    whenUploaded: PropTypes.string.isRequired,
    downloads: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default MovieDetail