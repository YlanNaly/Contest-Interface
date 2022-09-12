import { Pagination } from "./Pagination";
import "../../css/Pagination.css"
import { Table } from "react-bootstrap";
import ToastMessage from "./Toast";
export default function AllData() {
 /*   const [data,setData] = useState([])

        const options = {
        method: 'get'
    }

        fetch(`${BASE_URL}`+'/candidates/nonadmitted?page=0&page_size='+3, options)
        .then(response => setData(response) , console.log(data))
        .catch(error => {
            console.log(error)
            alert("couldn't get")
        }) */
    return(
<div className="content">
<Table className="table" id='dashboard' striped bordered hover>
      <thead>
        <tr>
          <th>Rang</th>
          <th>Nom</th>
          <th>Prenom</th>
          <th>Francais Bac</th>
          <th>Francais Examen</th>
          <th>Maths Bac</th>
          <th>Maths Exam</th>
          <th>Moyenne</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td className="status">@mdo</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
        <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
        <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    <Pagination/>
    </Table>
</div>
    )
}