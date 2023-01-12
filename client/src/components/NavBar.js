import { NavLink } from "react-router-dom"
import Logout from './Logout';

const NavBar = ({setUser, user}) => {
    return (
        <div className="nav-bar">
            <NavLink className="nav-link">Home</NavLink>
            <NavLink className="nav-link">Profile</NavLink>
            {user ? <Logout setUser={setUser}/> : console.log(user)}
        </div>
    )
}

export default NavBar