import styles from './App.module.css';

const images = ['0.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png']

function Background() {
    const image = images[Math.floor(Math.random() * images.length)]
    return (
        <img className={styles.background} src={process.env.PUBLIC_URL + '/img/' + image} alt="NoImage"></img>
    )
}

export default Background