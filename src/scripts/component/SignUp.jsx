import { useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../libs/BaseUrl";
import InPut from "../component/Button";
import Login from "../page/Login";
import axios from "axios";
export default function SignUp(props) {

    const handlesubmit=(e)=>{
        e.preventDefault()
    };
    const navigate = useNavigate()
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [choose , setChoose ] = useState(false)

    const addAdmin = () =>{

        const options = {
            body: {
            username  :  username ,
            password  : password ,
            role      : 'ADMIN',
            enabled   : true,
            locked    : false
            }
        }
            axios.post(`${BASE_URL}`+'/signup', options)
            .then(response => response.status == 200 ? navigate('/accueil') : navigate('/login') )
            .catch(error => {
                navigate('/login')
                alert("couldn't added person")
            })
    }
return(
 <>  { 
    choose ? <Login/> :
<div className="body">
    <div className="container1" id="container" >
    <div className="form-container sign-in-container">
        <form action="#">
            <h1>Sign Up</h1>
            <div className="social-container">
                <a  className="social" ><i className="fab fa-facebook "></i></a>
                <a  className="social" ><i className="fab fa-google"></i></a>
                <a  className="social" ><i className="fab fa-github"></i></a>
            </div>
            <span>or use your account</span>
            <InPut type ="text" placeholder="USERNAME" setValue={setUsername} />
            <InPut type ="password" placeholder="PASSWORD" setValue={setPassword} />
            <p>New there , click<a href="#" color="blue" onClick={()=>setChoose(true)} > LOGIN IN</a></p>
            <button className="button2" onClick={()=>addAdmin}>Sign Up</button>
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