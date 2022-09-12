import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Pagination } from "../component/Pagination";
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
<div className="fixed-top">
</div>
<div className="banner">
<Banner/>
</div>

<Table className="table" id='dashboard' striped bordered hover>
      <thead>
        <tr>
          <th>ok</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((elt,k)=>(
              <tr key={elt?.id}>
                <td>{k+1}</td>
                <td>{elt?.lastName}</td>
                <td>{elt?.firstName}</td>
                <td>{elt?.frenchEntranceExam}</td>
                <td>{elt?.mathEntranceExam}</td>
                <td>{elt?.mathBac}</td>
                <td>{elt?.frenchBac}</td>
                <td>{elt?.mathAverage}</td>
                <td>{elt?.frenchAverage}</td>
                <td>{elt?.totalAverage}</td>
                <td>{elt?.status}</td>
              </tr>
          ))
      }
      </tbody>
    <Pagination setPage={setPage} page={page} />
    </Table>
</>
    )

}