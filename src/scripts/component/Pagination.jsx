import React from "react";
import '../../css/bootstrap.css';
export function Pagination({setPage, page}) {
    return(
<>
    <div id="pagination">
        <ul className="pagination">
            <li className="page-item">
                <a className="page-link" href="#" aria-label="Previous" onClick={()=>setPage(page-1)}>
                    <span>&laquo;</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">{page > 1 ? page+1 : 0}</a></li>
                <li className="page-item">
                <a className="page-link" href="#" aria-label="Next" onClick={()=>setPage(page+1)}>
                   <span>&raquo;</span>
                </a>
            </li>
        </ul>
    </div>
</>
    )
}