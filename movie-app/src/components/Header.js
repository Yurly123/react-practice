import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import css from './Header.module.css'
const { header, emptymargin } = css

function Header() {
    return (
        <Fragment>
            <header className={header}>
                <nav>
                    <Link to='/'>Home</Link>
                </nav>
                <h1>Movie Constructions</h1>
            </header>
            <div className={emptymargin}></div>
        </Fragment>
    )
}

export default Header