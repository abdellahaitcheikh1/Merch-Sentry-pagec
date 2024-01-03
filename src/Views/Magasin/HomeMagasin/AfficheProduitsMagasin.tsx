import produit from "../../Admin/IMG/1.png"
import { Link } from "react-router-dom";
import "./afficheProduitmagasin.css"
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
export default function AfficheProduitMagasin(){
    return <>
    <SideBareMagasin/>
    <div className="container produitCard mt-5">
    <Link to="/magasine"><i className="bi bi-arrow-left-short"></i></Link>

    <div className="barTitle">
        <h3>Super 5.1</h3>
        <i className="bi bi-cart3"><span>1</span></i>
        </div>
    <div className="cardItem mt-5">
        <img src={produit} alt="" />
    <div className="ItemsInfo">
        <h2 className="mb-5">100 MAD</h2>
        <div className="quantity">
        <h6>Quantité <input className="inputQ" type="number" min={1} placeholder="1"/> </h6>
            </div>
        <button className="ajouterP">Ajouter au panier</button>
    </div>

    </div>
    <div className="sectionDesc">
        <h4 className="desch4">Description</h4>
    <div className="descriptione mt-3 mb-5" >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit 
        <br />
         Rerum voluptatibus, delectus quas fugiat culpa, <br />
           nesciunt quisquam laboriosam, expedita quaerat voluptas alias quod! <br />
         Quisquam quis explicabo eveniet accusamus, magnam praesentium rem!</p>
         <h5>Réference : <span>4038500</span></h5>
    </div>
    </div>
    </div>
    </>
}