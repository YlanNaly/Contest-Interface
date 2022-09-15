import '../../css/NavBar.css'
import logo from '../component/image/hate-graduate.jpg'
import { useNavigate } from 'react-router';

export default function NavBar (props) {
    const navigate = useNavigate();
  const {label , label2 ,label3} = props
    return(
<>
<nav className="navbar">
     <div className="logo" onClick={()=>navigate('/')}>
        <img src={logo} alt="logo"/>
     </div>
     <ul className="nav-links">
       <div className="menu">
        <li><a onClick={()=>navigate('/')} >{label}</a></li>
        <li><a onClick={()=>navigate('/listes')}>{label2} </a></li>
        <li><a  onClick={()=>navigate('/login')}>{label3} </a></li>
       </div>
     </ul>
   </nav>
</>
    )
}