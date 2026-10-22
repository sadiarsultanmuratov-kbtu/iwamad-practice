import { NavLink } from 'react-router'
import { useLikes } from '../context/LikesContext'

type HeaderProps = {
    name: string
    tagline: string
}

function Header({ name, tagline }: HeaderProps) {
    const { likes } = useLikes()

    return (
        <header className="site-header">
            <h1>{name}</h1>
            <p className="tagline">{tagline}</p>

            <nav className="site-nav">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <span className="header-likes">♥ {likes}</span>
            </nav>
        </header>
    )
}

export default Header
