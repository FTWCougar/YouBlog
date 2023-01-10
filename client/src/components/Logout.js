import { useNavigate } from "react-router-dom"


const Logout = ({setUser}) => {

    const navigate = useNavigate()

    function handleLogout() {
        const logoutObj = { method: "DELETE" }
        fetch("/api/logout", logoutObj)
        .then(() => {
          setUser(null)
          navigate("/login")
        })
      }
    return (
        <button onClick={handleLogout} className="logout-button">Logout</button>
    )
}
export default Logout;
