import './Nav.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">
                <button>Home</button>
            </NavLink>
            <NavLink to="/create">
                <button>Create New Poster</button>
            </NavLink>
            <NavLink to="/saved">
                <button>My Saved Posters</button>
            </NavLink>
      </nav>
    )
}

export default Nav;