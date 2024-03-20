import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./comfirmeNotification.css"
export default function ConfirmeMessage(){
    return <>
    <SideBareMagasin/>
    <div className="container mt-5">
    <div className="barRetour">
      <span className="iconRetour">
        <Link to="/magasins/:id/notifications"><i className="bi bi-arrow-left-short"></i></Link>
        
      </span>
  </div>
<div className="marque">

<h4 className="mb-3">confirmez-nous que vous avez été remboursé avec succès</h4>
</div>
    <form action="" method="post">

  <div id="info" className="row mb-3">
    <div className="col">
    <span>Nom de produit </span>
      <input type="text" id="nproduit" className="form-control"/>
    </div>
    
    <div className="col">
    <span>Quantité</span>

      <input type="number" id="quantity" className="form-control" />
    </div>
    <div className="mb-3" id="desc">
    <span>Raison</span>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
</div>

  </div>
  <div className="confirmer">
    <button>Oui , j'ai été remboursé</button><br />
    <Link className="pd" to="">Non , passer une autre demande </Link>
  </div>
  </form>
    </div>
    </>
}