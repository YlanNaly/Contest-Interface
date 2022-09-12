import '../../css/Footer.css'

export default function Footer (){
    const date = new Date();
    let year = date.getFullYear();
    return(
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p className='foot'>Copyright &copy; {year}, All Right Reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}