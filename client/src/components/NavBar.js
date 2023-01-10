import { NavLink } from "react-router-dom"
import Logout from './Logout';

const NavBar = ({setUser, user}) => {
    return (
        <div className="nav-bar">
            <NavLink>Home</NavLink>
            <NavLink>Profile</NavLink>
            {user ? <Logout setUser={setUser}/> : console.log(user)}
        </div>
    )
}

export default NavBar