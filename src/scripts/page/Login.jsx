import { useState } from "react";
import SignUp from '../component/SignUp'
import { useNavigate } from "react-router";
import '../../css/Login.css'
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
      /**   const options = {
            method: 'POST',
            body: 
            username 
        }
    
            fetch(`${BASE_URL}/login`, options)
            .then(response => response.status == 200 ? navigate('/accueil') : navigate('/') )
            .catch(error => {
                console.log(error)
                alert("couldn't attempt")
            })*/
            navigate('/accueil')
    }
return(
 <>  
  {
    choose ? <SignUp/> :
<div className="header">

 
<div className="container">
    <form action="" method="POST" className="form">
        <h1>Login</h1>
    <img src="https://i.ibb.co/bvqgKnm/account.png" width="120" height="120" />
        <div className="input">
            <input type="email" name="email" className="form-input" id="email" placeholder="Email" required />
            <label for="email" id="email_label" className="label">Email</label>
        </div>
        <div className="input">
            <input type="password" className="form-input" placeholder="Password" id="password" required />
            <label for="password" className="form-input" >Password</label>
        </div>
        <p><a href="#">Forgot your password?</a></p>
        <button type="submit" id="submit_button">Login</button>
        <p>Or Sign Up Using:</p>
        <div className="social-share"><a href="#"><i className="fa-brands fa-google"></i> </a>or <a href="#"><i className="fa-brands fa-facebook-f"></i></a></div>
    </form>
</div>
    
    <div>
    </div>
    </div>
    } 
 </>
)
}
/*<div className="body">
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
    </div> */