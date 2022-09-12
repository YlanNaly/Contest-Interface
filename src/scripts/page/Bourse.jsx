import Card from "react-bootstrap/Card";
import SideBar from "../component/SideBar";
import '../../css/Bourse.css';
export default function Bourse() {

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
            GeeksforGeeks provides a platform for all the students to study
            about all the subjects in CSE.
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
          <Card.Text>
            GeeksforGeeks 
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
          <Card.Text>
            GeeksforGeeks provides a platform for all the students to study
            about all the subjects in CSE.
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
          <Card.Text>
            GeeksforGeeks provides a platform for all the students to study
            about all the subjects in CSE.
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
</div>
    )
}