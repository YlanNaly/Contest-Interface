import NavBar from "./Navbar";
import AllData from "./Tables";

export default function Listes(){

    return(
<>
<nav>
    <NavBar
    label = "Home"
    label3="Login"
    />
</nav>
    <div className="row">
        <AllData/>
    </div>
</>
    )
}