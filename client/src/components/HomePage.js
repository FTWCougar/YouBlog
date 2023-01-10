import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const HomePage = ({user}) => {
    const navigate = useNavigate()
    useEffect(() => {
        console.log(user)
        if (!user){
           return navigate("/login");
        }
     });
    return (
        <div>
            <h1>Hello HomePage</h1>
        </div>
    )
}
export default HomePage