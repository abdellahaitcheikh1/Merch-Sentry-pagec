import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import produitIMG from  "../../Admin/IMG/3.png"
import produitIMGa from  "../../Admin/IMG/e1.png"

import "./historiqueId.css"
import { useContext } from "react";
import { MagasinContext } from "../../../Context/MagasinContext";
export default function HistoriqueId(){
    const magasinContext = useContext(MagasinContext);
    const MagasinId = localStorage.getItem('MagasinId');
      const id = MagasinId || magasinContext.id?.id;
    return<>
    <SideBareMagasin/>
        <div className="container produitCard  mt-5">
        <Link to={`/magasins/${id}/historiques`}><i className="bi bi-arrow-left-short"></i></Link>

        <div className="barTitle">
            <h3>6484011</h3>
            </div>  
            <div className="card mt-5">
                <div className="produit">
                <div className="items">
                    <img src={produitIMG} alt="" />
                        <h4>I-FLUX </h4>
                        <h6>15 200 MAD</h6>
                        <div className="quantitem">

                        <label htmlFor="">
                            Quantité <input type="number" min={1} placeholder="1" />
                        </label>
                        </div>
                </div>
                    <div className="choix">
                        <Link className="Echanger" to="/magasins/historique/id/echanger">Echanger</Link><br /><br />
                        <Link className="rembourser" to="/magasins/historique/id/rembourser">Se rembourser</Link>

                    </div>
                </div>
            </div>
            <div className="card mt-3">
                <div className="produit">
                <div className="items">
                    <img src={produitIMGa} alt="" />
                        <h4>DPF FLUSH</h4>
                        <h6 id="dpf">15 440 MAD</h6>
                        <div className="quantitem">

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