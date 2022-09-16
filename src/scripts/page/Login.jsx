import { useState } from "react";
import SignUp from '../component/SignUp'
import { useNavigate } from "react-router";
import '../../css/Login.css'
import { BASE_URL } from "../libs/BaseUrl";
import InPut from "../component/Button";
import { findAllByTestId } from "@testing-library/dom";
export default function Login(props) {

    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(username)
        console.log(password)
    };
    const navigate = useNavigate()
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [choose , setChoose ] = useState(false)
    const getData =()=>{
       const options = {
            method: 'POST',
            body: {
            "username" :username,
            "password" :password,
            "enabled" : true,
            "locked":false
         }
        }
        fetch(`${BASE_URL}/login`, options)
        .then(response => response.status == 200 ? navigate('/accueil') : navigate('/login') )
        .catch(error => {
                navigate('/login')
        })
    }
return(
 <>  
  {
    choose ? <SignUp/> :

<div className="body">
<div className="container1" id="container" >
    <div className="form-container sign-in-container">
        <form action="#" onSubmit={handlesubmit}>
            <h1>Sign In</h1>
            <div className="social-container">
                <a  className="social" ><i className="fab fa-facebook "></i></a>
                <a  className="social" ><i className="fab fa-google"></i></a>
                <a  className="social" ><i className="fab fa-github"></i></a>
            </div>
            <span>or use your account</span>
            <InPut type ="text" placeholder="USERNAME" setValue={setUsername} />
            <InPut type ="password" placeholder="PASSWORD" setValue={setPassword} />
            <p>New there , click<a href="#" color="yellow" onClick={()=>setChoose(true)} > SIGN UP</a></p>
            <button className="button1" onClick={()=>getData()}>Sign In</button>
        </form>
    </div>
    <div className="overlay-container">
        <div className="overlay">
            </div>
        </div>
    </div>  
</div> 
    } 
 </>
)
}