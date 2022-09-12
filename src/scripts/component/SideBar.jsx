import { useNavigate } from 'react-router';
import '../../css/SideBar.css'
import Footer from './Footer'
import ToastMessage from './Toast';

export default function SideBar (props) {
    const navigate = useNavigate();
    return(
<>
<div className="sidebar1" >
  <i  onClick={()=>navigate('/accueil')} class="fa fa-bars"></i>
  <a onClick={()=>navigate('/accueil')}>Accueil</a>
  <a onClick={()=>navigate('/dashboard')}>Dashboard</a>
  <a onClick={()=>navigate('/bourse')}>Bourse</a>
  <a onClick={()=>navigate('/apropos')}>A propos</a>
<ToastMessage/>
<Footer />
</div>
</>
    )
}