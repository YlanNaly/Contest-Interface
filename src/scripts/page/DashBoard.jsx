import SideBar from "../component/SideBar";
import AllData from "../component/Tables";
import { useState } from 'react';
import { useNavigate } from 'react-router';
import '../../css/SideBar.css'

export default function Dashboard () {

    return (
<div>
    <div className="left"><SideBar/></div>
    <div className="center"><AllData/></div>
</div>
    )
}