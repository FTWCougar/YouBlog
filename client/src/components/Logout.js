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
        <div>
            <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
    )
}
export default Logout;
