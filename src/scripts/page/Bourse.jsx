import Card from "react-bootstrap/Card";
import SideBar from "../component/SideBar";
import '../../css/Bourse.css';
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../libs/BaseUrl";
export default function Bourse() {

  const [data,setData] = useState([])
  const [bourse,setBourse] = useState([])
  const [admis,setAdmis] = useState([])
  const [taux,setTaux] = useState([])
  const [page,setPage] = useState(0)

  useEffect(()=>{
    axios.get(`${BASE_URL}/candidates?page=${page}&page_size=200`)
   .then(res => setData(res.data))
  },[data])  

  useEffect(()=>{
    const promise2 = axios.get(`${BASE_URL}/candidates/admitted?page=${page}&page_size=200`);
    promise2.then((response)=>{
        setAdmis(response.data)
        setTaux(Math.ceil((admis.length/data.length)*100))
    }).catch((err)=>{
        console.log(err)
    })
})

return(
 <div>
    <div className="left"><SideBar/></div>
    <div className="center">
      
    <Card style={{ 
        width: "22rem" , marginLeft:'22rem' ,
     marginTop:'2rem' , position:'fixed' }}>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>BOURSE D'EXCELLENCE</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            One Stop For all CS subjects
          </Card.Subtitle>
          <Card.Text>
    {
              bourse.map((elt , k)=>(
                <ul key={k} >
                  <li>{elt?.lastName}</li>
                </ul>
              ))
    }
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: "12rem" , height:"12rem",
       marginLeft:'49rem' , marginTop:'15rem' , 
       position:'fixed' , borderRadius : "50%"}}>
        <Card.Body>
          <Card.Title style={{ color: "green"}}>TAUX DE REUSSITE</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Pourcentage d'admission 
          </Card.Subtitle>
          <Card.Text style={{ fontSize : "2rem" }}>
          {taux}%
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ 
        width: "22rem" , marginLeft:'22rem' ,
       marginTop:'28rem' , position:'fixed' }}>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>NOMBRE D'ADMIS</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            One Stop For all CS subjects
          </Card.Subtitle>
          <Card.Text style={{ fontSize : "2rem" }}>
            {admis.length}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ 
        width: "22rem" , marginLeft:'66rem' 
      , marginTop:'28rem' , position:'fixed' }}>
        <Card.Body>
          <Card.Title style={{ color: "green" }}>NOMBRE D'INSCRIT</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            One Stop For all CS subjects
          </Card.Subtitle>
          <Card.Text style={{ fontSize : "2rem" }}>
            {
              data.length
            }
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
</div>
    )
}