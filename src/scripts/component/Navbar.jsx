import '../../css/NavBar.css'
import logo from '../component/image/hate-graduate.jpg'
import { useNavigate } from 'react-router';
export default function NavBar () {
    const navigate = useNavigate();

    return(
<>
<nav className="navbar">
     <div className="logo" onClick={navigate('/')}>
        <img src={logo} alt="logo"/>
     </div>
     <ul className="nav-links">
       <div className="menu">
        <li><a href="/">Home</a></li>
        <li><a href="/">Apropos</a></li>
        <li className="services">
        <a><i  onClick={()=>navigate('/login')} className="fa fa-sign-out" aria-hidden="true"></i></a></li>
       </div>
     </ul>
   </nav>
</>
    )
}