import Sidebare from "../Sidbare/Sidebare";
import ImageProduit2 from "../IMG/2.png"
import { Link } from "react-router-dom";
export default function AfficheProduit(){
    return <>
    <Sidebare/>
    <div className="container produit-card mt-5">
    <Link to="/"><i className="bi bi-arrow-left-short arrow"></i></Link>

    <div className="bar-title">
        <h3>R-Flush Radiator Cleaner 1L</h3>
        <a href=""><Link to="" className="buts">Changer les infos</Link></a>
    </div>
    <div className="card-item mt-5">
        <img className="image-produit" src={ImageProduit2} alt="" />
    <div className="item-info">
        <h2 className="price-product mb-5">490 MAD <span className="pu">/P.U</span></h2>
        <h6>Quantité : <span className="quantity-item">1000</span> </h6>
        <h6>Réference : <span className="reference-item">3341264</span> </h6>
    </div>

    </div>
    <div className="description mt-5 mb-5" >
        <h4>Description</h4>
        <p className="mt-3">Nettoyeur High-Tech pour le système de refroidissement. <br />
        Elimine efficacement et sûrement:<br/>
 . corrosion <br />
 . calcaire<br />
 . restes d’huile<br />
 . résidus (boues).<br />
Nettoie le système de refroidissement sans démontage.</p>
    </div>
    <div className="text-center button-delete mb-3">
    <Link to=""><a href="" className="mx-auto">Supprimer ce produit</a></Link>
</div>

    </div>
    </>
}