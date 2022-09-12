import { Pagination } from "./Pagination";
import "../../css/Pagination.css"
import { Table } from "react-bootstrap";
import ToastMessage from "./Toast";
import { useEffect, useState } from "react";
import { BASE_URL } from "../libs/BaseUrl";
import axios from "axios";
export default function AllData() {
 const [data,setData] = useState([])
   const [year,setYear] = useState([])
   const [contest,setContest] = useState([])
    const [page,setPage] = useState(0)
    
     useEffect(async()=>{
       await axios.get(`${BASE_URL}/candidates?page=${page}&page_size=3`)
        .then(response => setData(response.data))
        .catch(error => {
        }) 
     },[data])   
/**
     useEffect(async()=>{
      await axios.get(`${BASE_URL}/year?page=${page}&pageSize=+3`)
      .then(response => setYear(response.data))
      .catch(error => {
      }) 
   },[year])   

   useEffect(async()=>{
    await axios.get(`${BASE_URL}/contest?page=${page}&pageSize=+3`)
    .then(response => setContest(response.data))
    .catch(error => {
    }) 
 },[contest])    */
    return(
<div className="content">
<select className="btn btn-outline-secondary rounded-2" onChange={(e)=>setYear(e.target.value)} >
  {/*
        year.map((elt,k) => (
            <option key={k+1}>{elt?.universityYear}</option>
        ))
  */}
</select> 
<select className="btn btn-outline-secondary rounded-2" >
  {/*
        contest.map((elt,k) => (
            <option key={k+1} >{elt?.contestDate}</option>
        ))
        */}
</select> 
<Table className="table" id='dashboard' striped bordered hover>
      <thead>
        <tr>
          {
            Object.keys(data[0]).filter((e)=>e !=" id" && e!= "contest").map((elt)=>(
              <th>{elt}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {/*
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
          */}
      </tbody>
    <Pagination setPage={setPage} page={page} />
    </Table>
</div>
    )
}