import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./demande.css"
export default function Demande(){
    return <>
        <SideBareMagasin/>
        <div className="container mt-5">
        <div className="barRetour">
      <span className="iconRetour">
        <Link to="/magasine"><i className="bi bi-arrow-left-short"></i></Link>
      </span>

  </div>
<div className="marque">
<h4 className="mb-3">nous vous prions de bien vouloir nous contacter</h4>
</div>
<form action="" method="post">

  <div id="infoDemande" className="row mb-3">
    <div className="col">
    <span>Nom de produit </span>
      <input type="text" className="form-control"/>
    </div>
    
    <div className="col">
    <span>Réference</span>

      <input type="text"  className="form-control" />
    </div>
    <div className="row mb-3">
    <div className="col">
    <span>Catégorie </span>
      <input type="text" className="form-control"/>
    </div>
    <div className="col">
    <span>Quantité </span>
      <input type="number" id="qt" className="form-control"/>
    </div>
    </div>
    <div className="mb-3">
  <textarea className="form-control" placeholder="Ajouter un note" id="exampleFormControlTextarea1" rows={5} defaultValue={""} />
</div>        
<div className="btnEnvoye">
            <button><Link className="button" to="">Envoyer</Link></button>
        </div>

  </div>
  </form>
        </div>
    </>
}