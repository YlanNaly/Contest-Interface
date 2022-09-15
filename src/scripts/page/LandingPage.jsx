import axios from "axios";
import { useEffect, useState } from "react";
import Body from "../component/Body";
import { BASE_URL } from "../libs/BaseUrl";
import Banner from "./Banner";

export default function LandingPage () {
    const [data,setData] = useState([])
     const [page,setPage] = useState(0)
     
useEffect(()=>{ axios.get(`${BASE_URL}/candidates?page=${page}&page_size=3`)
    .then(response => setData(response.data))
    .catch(error => {
    }) 
},[data]) 

    return(
<>
<Banner/>
<Body/>
</>
    )

}