import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./PanierMagasin.css"
import produit from "../../Admin/IMG/nike-air-max-sneakers-shoe-air-jordan-men-shoes-45af4ec7176bad26683ab00a9e5623ca.png"
export default function PanierMagasin(){
    return <>
    <SideBareMagasin/>
    <div className="container mt-5">
        <h2>Mon Panier (2)</h2>
        <div className="card mt-5">
            <div className="InfoPrp">
                <Link className="supprimer" to="">Supprimer ce produit <i className="bi bi-x-lg"></i></Link>
                <h4>100.00 MAD</h4>
            </div>
            <div className="infoPP">
            <img src={produit} alt="" />
            <h5>Shoes Nike</h5>
            <div className="quantite">

            <label htmlFor="">
                Quantité : 
            <input type="number" min={1} placeholder="1"  />
                </label>
            </div>
            </div>

        </div>
        <div className="card mt-5">
            <div className="InfoPrp">
                <Link className="supprimer" to="">Supprimer ce produit <i className="bi bi-x-lg"></i></Link>
                <h4>100.00 MAD</h4>
            </div>
            <div className="infoPP">
            <img src={produit} alt="" />
            <h5>Shoes Nike</h5>
            <div className="quantite">

            <label htmlFor="">
                Quantité : 
            <input type="number" min={1} placeholder="1"  />
                </label>
            </div>
            </div>

        </div>
        <div className="total">
            <div className="viderpanier">
            <Link className="iconvide" to="">
            <i className="bi bi-trash"></i> Vider le panier
            </Link>
            <p>Date d'éxpeération : 27/11/2023</p>
            </div>
            <div className="totalitem">

            <h6>Total : <span className="price">200.00 MAD</span></h6>
            <Link className="suivi" to="">suivi la commande </Link>
            </div>
            
        </div>
    </div>
    </>
}