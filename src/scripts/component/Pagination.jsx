export function Pagination({setPage , page ,data}) {
    function prevPage() {
        if(page === 0){
            setPage(page)
        }
        else{
            setPage(page-1);
        }
    }
    function nextPage() {
        if(page === data?.length-1){
            setPage(page)
        }
        else{
            setPage(page+1);
        }
    }
    return(
<>
    <div id="pagination">
        <ul className="pagination" >
            <li className="page-item">
                <a className="page-link" href="" aria-label="Previous" onClick={prevPage } >
                    <span >&laquo;</span>
                </a>
            </li>
            <li className="page-item"><a className="page-link" href="#">{page}</a></li>
                <li className="page-item">
                <a className="page-link" href="" aria-label="Next" onClick={nextPage}>
                   <span>&raquo;</span>
                </a>
            </li>
        </ul>
    </div>
</>
    )
}