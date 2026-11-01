import { NavLink } from 'react-router'
import logo from '../assets/logo.svg'
import { useLikes } from '../context/LikesContext'

type HeaderProps = {
    name: string
}

function Header({ name }: HeaderProps) {
    const { likes } = useLikes()

    return (
        <header className="site-header">
            <div className="brand">
                <img src={logo} alt="" width={32} height={32} />
                <span>{name}</span>
            </div>

            <nav aria-label="Main">
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/skills">Skills</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/register">Register</NavLink>
                <NavLink to="/events">Events</NavLink>
                <span>♥ {likes}</span>
            </nav>
        </header>
    )
}

export default Header
