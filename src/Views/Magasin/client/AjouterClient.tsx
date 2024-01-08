import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./ajouterClient.css"
export default function AjouterClient(){
    return <>
        <SideBareMagasin/>
        <div className="container mt-5 mb-5">
    <div className="barRetour">
      <span className="iconRetour">
        <Link to="/magasin/client"><i className="bi bi-arrow-left-short"></i></Link>
        
      </span>
  </div>
<div className="marque">

<h4 className="mb-3">Ajouter un nouveau commercial</h4>
</div>
        <div>
    <form action="" method="post">
  <div className="row mb-3">
    <div className="col">
    <span>Nom</span>
      <input type="text" className="form-control"/>
    </div>
    
    <div className="col">
    <span>prénom</span>

      <input type="text" className="form-control" />
    </div>
  </div>
  <div className="row mb-3">

    <div className="col">
  <span>Numéro du téléphone</span> 
      <input type="number" className="form-control"  />
    </div>
    <div className="col">
  <span>Solde</span> 
  <div className="input-group mb-3">
  <input type="number" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span className="input-group-text" id="basic-addon2">Mad</span>
</div>

    </div>
  </div>

  <div className="row mb-3">
    <div className="col">
  <span>Vile</span> 
      <input type="text" className="form-control" />
    </div>
    <div className="col">
  <span>Code postal</span> 
      <input type="password" className="form-control"/>
    </div>
  </div>
</form>
</div>
    <div className="btnAjouteCommercial mt-5">
        <Link id="bac" className="buttonAjouter" to ="">Ajouter un client </Link>
    </div>
    </div>
    </>
}