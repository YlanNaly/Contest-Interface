import { Pagination } from "./Pagination";
import "../../css/Pagination.css"
import { Table } from "react-bootstrap";
import "../../css/bootstrap.css"
import { useEffect, useState } from "react";
import { BASE_URL } from "../libs/BaseUrl";
import axios from "axios";

export default function AllData() {
 const [data,setData] = useState([])
   const [year,setYear] = useState([])
   const [contest,setContest] = useState([])
    const [page,setPage] = useState(0)
    
    useEffect(()=>{
     axios.get(`${BASE_URL}/candidates?page=${page}&page_size=3`)
    .then(response => setData(response.data))
    .catch(error => {
    }) 
    },[data])  

    useEffect(()=>{
    axios.get(`${BASE_URL}/year?page=${page}&pageSize=+3`)
    .then(response => setYear(response.data))
    .catch(error => {
    }) 
    },[year])   

    useEffect(()=>{
      axios.get(`${BASE_URL}/contest?page=${page}&pageSize=+3`)
     .then(res => setContest(res.data))
    },[contest])   
    
    
    return(
<div className="content">
<select className="btn btn-outline-secondary rounded-2" onChange={(e)=>setYear(e.target.value)} >
  {
        year.map((elt,k) => (
            <option key={k+1}>{elt?.universityYear}</option>
        ))
  }
</select> 
<select className="btn btn-outline-secondary rounded-2" onChange={(e)=>setContest(e.target.value)} >
  {
        contest.map((elt,k) => (
            <option key={k+1} >{elt?.contestDate}</option>
        ))
        }
</select> 
<Table className="table" id='dashboard' striped bordered hover>
      <thead>
        <tr>
        <td>Rang</td>
        <td>lastName</td>
        <td>firstName</td>
        <td>frenchEntranceExam</td>
        <td>mathEntranceExam</td>
        <td>mathBac</td>
        <td>frenchBac</td>
        <td>mathAverage</td>
        <td>frenchAverage</td>
        <td>totalAverage</td>
        <td>status</td>
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
    <Pagination setPage={setPage} page={page} data={data} />
</Table>
</div>
    )
}