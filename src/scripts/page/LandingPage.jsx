import NavBar from "../component/Navbar";
import Banner from "./Banner";

export default function LandingPage () {

    return(
<>
<div className="fixed-top">
<NavBar/>
</div>
<div className="banner">
<Banner/>
</div>
</>
    )

}