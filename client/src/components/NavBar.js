import { NavLink } from "react-router-dom"
import Logout from './Logout';

const NavBar = ({setUser, user}) => {
    return (
        <div>
        <div className="nav-bar">
            <NavLink exact to="/" className="nav-link" >Home</NavLink>
            <NavLink exact to={`/${user.username}`} className="nav-link">Profile</NavLink>
            {user ? <Logout setUser={setUser}/> : console.log(user)}
        </div>
        </div>
    )
}

export default NavBar