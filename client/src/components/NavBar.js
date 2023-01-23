import { NavLink } from "react-router-dom"
import Logout from './Logout';

const NavBar = ({setUser, user}) => {
    return (
        <div>
        <div className="nav-bar">
            <NavLink to="/" className="nav-link" >Home</NavLink>
            <NavLink to={`/${user.username}`} className="nav-link">Profile</NavLink>
            <NavLink to={`/post`} className="nav-link">New Post</NavLink>
            {user ? <Logout setUser={setUser}/> : console.log(user)}
        </div>
        </div>
    )
}

export default NavBar