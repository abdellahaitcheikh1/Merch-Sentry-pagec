import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./PanierMagasin.css"
import produit from "../../Admin/IMG/e1.png"
import produit1 from "../../Admin/IMG/3.png"
import produit2 from "../../Admin/IMG/e3.png"


export default function PanierMagasin(){
    return <>
    <SideBareMagasin/>
    <div className="container mt-5">
        <h2>Mon panier (3)</h2>
        <div className="card mt-5">
            <div className="InfoPrp">
                <Link className="supprimer" to="">Supprimer ce produit <i className="bi bi-x-lg"></i></Link>
                <h4> 15 120 MAD</h4>
            </div>
            <div className="infoPP">
            <img src={produit1} alt="" />
            <h5>I-FLUX </h5>
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
                <h4> 7 720 MAD</h4>
            </div>
            <div className="infoPP">
            <img src={produit} alt="" />
            <h5>DPF FLUSH</h5>
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
                <h4>5 304 MAD</h4>
            </div>
            <div className="infoPP">
            <img src={produit2} alt="" />
            <h5>4-WAY Flux Evo</h5>
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