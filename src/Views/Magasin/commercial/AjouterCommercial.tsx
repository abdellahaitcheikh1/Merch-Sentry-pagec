import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./ajouterCommercial.css"
export default function AjouterCommercial(){
    return<>
    <SideBareMagasin/>
    <div className="container mt-5 mb-5">
    <div className="barRetour">
      <span className="iconRetour">
        <Link to="/commercial"><i className="bi bi-arrow-left-short"></i></Link>
        
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
  <span>Date de naissance</span> 

      <input type="date" className="form-control" />
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
        <Link className="buttonAjouter" to ="">Ajouter un commercial </Link>
    </div>
    </div>

    </>
}