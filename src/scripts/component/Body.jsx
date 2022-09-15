import back from "../component/image/excellence.png"
import social from "../component/image/social.png"
import "../../css/Body.css"
export default function Body(){

    return(
<>
    <div className="contains" id="details">
        <div className="image">
                <img src={back} alt="photo" />
            </div>
            <div className="text">
                <h1>BOURSE D'EXCELLENCE</h1>
                <p>
    Chez HEI , les premiers aux concours d'entrée ont la possibilitée de ne pas payer les frais de scolarité pendant 1an .
    Cela est valable pour 3 trois personnes .
                </p>
            </div>
    </div>
    <div className="contains2">
            <div className="text2">
                <h1>BOURSE CRITERE SOCIAUX</h1>
                <p>
    Chez HEI , tout le monde est la bienvenue mais faut faire les concours d'abord .
    Aux concours d'entrée , la possibilitée de ne pas payer les frais de scolarité pendant 1an sans être le premier est
    tout aussi faisable grâce aux bourse à critère sociaux .
                </p>
            </div>
            <div className="image2">
                <img src={social} alt="photo" />
            </div>
    </div>
</>
    )
}