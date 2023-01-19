import PropTypes from 'prop-types'
import css from './MovieDetail.module.css'
const { container, headname, coverimg, description, gobutton } = css

function MovieDetail({ title, coverImg, summary, whenUploaded, downloads, url }) {
    return (
        <div className={container}>
            <h1 className={headname}>{title}</h1>
            <img src={coverImg} className={coverimg} alt={title} />
            <article className={description}>
                <p>{summary}</p>
                <p>Upload Date : {whenUploaded}</p>
                <p>Downloads : {downloads}</p>
            </article>
            <a href={url} rel='noreferrer' target='_blank'>
                <button className={gobutton}>Go See</button>
            </a>
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