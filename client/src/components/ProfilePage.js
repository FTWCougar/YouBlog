import { useNavigate } from "react-router-dom";
import UserBlog from "./UserBlog";

const ProfilePage = ({setUser, user}) => {
  const navigate = useNavigate()

  const deleteAccount = () => {
    const logoutObj = { method: "DELETE" }
    fetch(`/api/users/${user.id}`, logoutObj)
    .then(() => {
      setUser(null)
      navigate("/login")
    })
  }

  return (
  <div>
    <h1>{user.username}</h1>
    <button className="delete-account-button" onClick={deleteAccount}>Delete Account</button>
    <UserBlog setUser={setUser} user={user}/>
    
  </div>
  )
};

export default ProfilePage;
