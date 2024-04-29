import { Link } from "react-router-dom";
import produit from "../../Admin/IMG/2.png"
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./ChangeProduitMagasin.css"
export default function ChangeProduitMagasin(){
    return <>
    <SideBareMagasin/>
        <div className="container produitCard mt-5">
    <Link to="/magasins/:id/articles"><i className="bi bi-arrow-left-short"></i></Link>

    <div className="barTitleM">
        <h3>R-Flush Radiator Cleaner 1L</h3>
        <a href=""><Link to="">Changer les infos</Link></a>
    </div>
    <div className="cardItem mt-5">
        <img src={produit} alt="" />
    <div className="ItemInfo">
        <h2 className="mb-5">490 MAD <span className="pu ">/P.U</span></h2>
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
    <div className="text-center buttonSuprimerM mb-3">
    <Link to=""><a href="" className="mx-auto">Supprimer ce produit</a></Link>
</div>

    </div>
    </>
}