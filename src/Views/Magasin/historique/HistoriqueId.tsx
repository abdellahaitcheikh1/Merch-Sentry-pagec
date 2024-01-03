import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import produitIMG from  "../../Admin/IMG/3.png"
import produitIMGa from  "../../Admin/IMG/e1.png"

import "./historiqueId.css"
export default function HistoriqueId(){
    return<>
    <SideBareMagasin/>
        <div className="container produitCard  mt-5">
        <Link to="/magasin/historique"><i className="bi bi-arrow-left-short"></i></Link>

        <div className="barTitle">
            <h3>6484011</h3>
            </div>
            <div className="card mt-5">
                <div className="produit">
                <div className="items">
                    <img src={produitIMG} alt="" />
                        <h4>Nike Max</h4>
                        <h6>100.00 MAD</h6>
                        <div className="quantite">

                        <label htmlFor="">
                            Quantité <input type="number" min={1} placeholder="1" />
                        </label>
                        </div>
                </div>
                    <div className="choix">
                        <Link className="Echanger" to="/magasin/historique/id/echanger">Echanger</Link><br /><br />
                        <Link className="rembourser" to="/magasin/historique/id/rembourser">Se rembourser</Link>

                    </div>
                </div>
            </div>
            <div className="card mt-3">
                <div className="produit">
                <div className="items">
                    <img src={produitIMGa} alt="" />
                        <h4>Nike Max</h4>
                        <h6>100.00 MAD</h6>
                        <div className="quantite">

                        <label htmlFor="">
                            Quantité <input type="number" min={1} placeholder="1" />
                        </label>
                        </div>
                </div>
                    <div className="choix">
                        <Link className="Echanger" to="">Echanger</Link><br /><br />
                        <Link className="rembourser" to="">Se rembourser</Link>

                    </div>
                </div>
            </div>
        </div>
    </>
}