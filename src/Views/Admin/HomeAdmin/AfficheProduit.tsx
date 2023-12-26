import Sidebare from "../Sidbare/Sidebare";
import produit from "../IMG/cap-hat-adidas-cap-png-hd-6dba9558659261a0e0db21f9fcd22894.png"
import { Link } from "react-router-dom";
export default function AfficheProduit(){
    return <>
    <Sidebare/>
    <div className="container produitCard mt-5">
    <Link to="/"><i className="bi bi-arrow-left-short"></i></Link>

    <div className="barTitle">
        <h3>Casket Adidas</h3>
        <a href=""><Link to="">Changer les infos</Link></a>
    </div>
    <div className="cardItem mt-5">
        <img src={produit} alt="" />
    <div className="ItemInfo">
        <h2 className="mb-5">100 MAD <span className="pu ">/P.U</span></h2>
        <h6>Quantité : <span className="chifre">1000</span> </h6>
        <h6>Réference : <span className="chifre">3341264</span> </h6>
    </div>

    </div>
    <div className="description mt-5 mb-5" >
        <h4>Description</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit 
        <br />
         Rerum voluptatibus, delectus quas fugiat culpa, <br />
           nesciunt quisquam laboriosam, expedita quaerat voluptas alias quod! <br />
         Quisquam quis explicabo eveniet accusamus, magnam praesentium rem!</p>
    </div>
    <div className="text-center buttonSuprimer mb-3">
    <Link to=""><a href="" className="mx-auto">Supprimer ce produit</a></Link>
</div>

    </div>
    </>
}