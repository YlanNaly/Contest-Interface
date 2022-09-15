import NavBar from "../component/Navbar";
import '../../css/Banner.css'

export default function Banner () {

    return(
<>
<NavBar label2="Listes Admis" label3="Login"/>
<div className="banner">
  <div className="banner-text">
    <h1 >GESTION DE CONCOURS</h1>
    <div className="mt-40">
      <a href="#details" className="btn1 btn-lg btn-color btn-icon">
        <span>Voir détails </span>    
        <i className="fa fa-arrow-right"></i> 
      </a>
    </div>
  </div>
</div>
</>
    )
}