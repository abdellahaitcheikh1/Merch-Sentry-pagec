import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./ajouterClient.css"
import { MagasinContext } from "../../../Context/MagasinContext";
import { useContext } from "react";
import { ClientInfo } from "../../../Modeles/Client";
const AjouterClient:React.FC<ClientInfo> = ({
  setCredit,
  setNomClient,
  setPrenomClient,
  setVille,
  handleSubmit,
  setICE,
  setNumTele,
  MessageError,

  }) => {  
    const magasinContext = useContext(MagasinContext);
    const MagasinId = localStorage.getItem('MagasinId');
    const id = MagasinId || magasinContext.id?.id;
    return<>
        <SideBareMagasin/>
        <div className="container mt-5 mb-5">
    <div className="barRetour">
      <span className="iconRetour">
        <Link to={`/magasins/${id}/clients`}><i className="bi bi-arrow-left-short"></i></Link>
        
      </span>
  </div>
<div className="marque">

<h4 className="mb-3">Ajouter un nouveau client</h4>
</div>
        <div>
    <form action="" onSubmit={handleSubmit} method="post">
      {MessageError!="" ? 
      
      <div
        className="alert alert-danger"
        role="alert"
      >
        <h6>{MessageError}</h6>
      </div>
      :""}
      
  <div className="row mb-3">
    <div className="col">
    <span>Nom</span>
      <input type="text" name="Nom" onChange={(e)=>setNomClient(e.target.value)}  className="form-control"/>
    </div>
    
    <div className="col">
    <span>prénom</span>

      <input type="text" name="Prenom" onChange={(e)=>setPrenomClient(e.target.value)}  className="form-control" />
    </div>
  </div>
  <div className="row mb-3">

    <div className="col">
  <span>Numéro du téléphone</span> 
      <input type="text" onChange={(e)=>setNumTele(e.target.value)} name="Telephone"  className="form-control"  />
    </div>
    <div className="col">
  <span>Solde</span> 
  <div className="input-group mb-3">
  <input type="number" name="Credit" onChange={(e)=>setCredit(e.target.value)}  className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span className="input-group-text" id="basic-addon2">Mad</span>
</div>

    </div>
  </div>

  <div className="row mb-3">
    <div className="col">
  <span>Vile</span> 
      <input type="text" name="Ville" onChange={(e)=>setVille(e.target.value)}  className="form-control" />
    </div>
    <div className="col">
  <span>ICE</span> 
      <input type="text" name="ICE" onChange={(e)=>setICE(e.target.value)} className="form-control"/>
    </div>
  </div>
    <div className="btnAjouteCommercial mt-5">
      <button id="bac" className="buttonAjouter" type="submit">Ajouter un client</button>
    </div>
</form>
</div>
    </div>
    </>
}
export default AjouterClient;