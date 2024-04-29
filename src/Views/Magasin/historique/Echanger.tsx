import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./echanger.css"
export default function Echanger(){
    return <>
    <SideBareMagasin/>
    <div className="container mt-5">
        <div className="barRetour">
      <span className="iconRetour">
        <Link to="/magasins/historique/id"><i className="bi bi-arrow-left-short"></i></Link>
      </span>

  </div>
<div className="marque">
<h4>Veuillez remplir tous ces informations pour pouvoir échanger votre produit</h4>
</div>
<form className="formechange" action="" style={{ marginLeft: "70px" }} method="post">

  <div id="infoDemande" className="row mb-3">
    <div className="col">
    <span>Nom de produit </span>
      <input type="text" className="form-control"/>
    </div>
    
    <div className="col">
    <span>Quantité </span>
      <input style={{ width: "150px"}} type="number" id="qt" className="form-control"/>
    </div>

    <div className="row mb-3">
    <div className="col">
    <span>Nom de produit souhaité </span>
      <input type="text" className="form-control"/>
    </div>
    <div className="col">
    <span>Quantité </span>
      <input style={{ width: "150px"}} type="number" id="qt" className="form-control"/>
    </div>
    </div>
    <div className="mb-3">
  <textarea style={{ width: "80%" }} className="form-control" placeholder="Raison pour laquelle vous souhaitez un remboursement" id="exampleFormControlTextarea1" rows={5} defaultValue={""} />
</div>        
<div className="btnEnvoye">
            <button><Link className="button" to="">Envoyer</Link></button>
        </div>

  </div>
  </form>
        </div>
    </>
}