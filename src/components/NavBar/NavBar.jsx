import { NavLink, Router } from "react-router-dom";
import './NavBar.css'
import navBarLogo from '../../assets/rick-and-morty-logo.png'

export default function NavBar() {
    return (
        <nav className="nav-container">
            <div className="menu-container">
                <NavLink to='/home'><img src={navBarLogo} alt="" /></NavLink>
                <ul>
                    <li>
                        <NavLink to='/home' className='link'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/wiki'>Wiki</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favorites'>Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink to='/abaut'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/form'>Form</NavLink>
                    </li>
                </ul>
            </div>
        </nav >
    )
}
