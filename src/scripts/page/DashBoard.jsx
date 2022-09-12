import SideBar from "../component/SideBar";
import AllData from "../component/Tables";

export default function Dashboard () {

    return (
<div>
    <div className="left"><SideBar/></div>
    <div className="center"><AllData/>
    </div>
    
</div>
    )
}