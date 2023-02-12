import "../styles/home/home.css"
import  {ReactComponent as LoginSvg} from "../assets/images/programmer.svg"
import Login from "../components/Login";

import Register from "../components/Register";
import {useEffect, useState} from "react"

const Home = () => {



    const [loginMode, setLoginMode] = useState(true)
    const handleClick = () => {
        setLoginMode(!loginMode)
    }
    return ( 
    <div className="home-container">
        <div className="home-inner">
            <div className="img-container">
                <LoginSvg className="pic"/>
            </div>
            <div className="home-form-container">
                {loginMode ? <Login/> : <Register/>}
                <p onClick={handleClick}>{loginMode ? 'Dont have an account? Sign up': 'Back to login'}</p>
            </div>

          
           
        </div>
    </div> 
    );
}
 
export default Home;