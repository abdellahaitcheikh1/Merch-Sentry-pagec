import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import img from "../../Admin/IMG/I-FLUX_200-768x768 1.png"
import "./encour.css"
export default function Encour(){
    return <>
    <SideBareMagasin/>
    <div className="container">
        <h3 className="h3 mt-5">Votre commande est en cours <br /> d'acheminement</h3>
        <div className="content">
        <div className="items1">
        <p id="pencour">votre commande <span className="id">Sxc18740</span> est en cours 
        d'acheminement<br /> vers l'adresse suivante <br />
        boulevard Abdelmoumen 21 Casablanca .<br />
        la livraison est actuellement prévue <br /><span className="id"> à lundi 22/12/23</span></p>
        <div className="ncom mb-3">

        <h4>Numéro de commande</h4>
        <h6>Sxc18740</h6>
        </div>
        <div className="btn">
        <Link className="button" to="">Suivi la livraison</Link>
        </div>
        </div>
        <div className="items2">
            <img src={img} alt="" />
            <div className="prencour">
            <h3>I-FLUX  </h3>
            <h4>15 120 MAD</h4>
            </div>

        </div>
        </div>
    </div>
    </>
}