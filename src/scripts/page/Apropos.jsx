import { useState } from "react";
import SideBar from "../component/SideBar";
import "../../css/Apropos.css"
import axios from "axios";
import {BASE_URL} from "../../scripts/Base_Url"
export default function Inscrit () {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    const [minAdmin , setMinAdmin] = useState()
    const [minList , setMinList] = useState()
    const [minMath , setMinMAth] = useState()

    const putMethod = async()=>{
      const promise = await axios.put(`${BASE_URL}/conditions` , data)
        .then(res => console.log(res))
        .catch(res => console.log(res))
    }
    const data = {
        min_admin : parseFloat(minAdmin),
        min_list : parseFloat(minList),
        min_Math : parseFloat(minMath)
    }
    return(
<div>
    <div className="left"><SideBar/></div>
    <div className="center">
        <label>CONDITIONS D'ADMISSION</label>
        <form className="form" onSubmit={handleSubmit} >
            <input className ="input" onChange={(e)=>setMinAdmin(e.target.value)} />
            <input className ="input" onChange={(e)=>setMinAdmin(e.target.value)}/>
            <input className ="input" onChange={(e)=>setMinAdmin(e.target.value)}/>
            <button className="button1" onClick={putMethod}>Changer</button>
        </form>
    </div>
</div>
    )
}