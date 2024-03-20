import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./ajouterCommercial.css"
import { useContext } from "react";
import { MagasinContext } from "../../../Context/MagasinContext";
import { CommercialInfo } from "../../../Modeles/Commercial";
const AjouterCommecial:React.FC<CommercialInfo> = ({
  setNom,
  setPrénom,
  setTélephone,
  setVille,
  handleSubmit,
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
        <Link to={`/magasins/${id}/commercials`}><i className="bi bi-arrow-left-short"></i></Link>
        
      </span>
  </div>
<div className="marque">

<h4 className="mb-3">Ajouter un nouveau commercial</h4>
</div>
        <div>
    <form action="" onSubmit={handleSubmit} method="post">
{MessageError!="" ?
    <div className="alert alert-danger" role="alert">
  {MessageError}
</div>
:""}
      
  <div className="row mb-3">
    <div className="col">
    <span>Nom</span>
      <input type="text" onChange={(e) => setNom(e.target.value)} name="nom" className="form-control"/>
    </div>
    
    <div className="col">
    <span>prénom</span>

      <input type="text"  onChange={(e) => setPrénom(e.target.value)} name="prenom"  className="form-control" />
    </div>
  </div>
  <div className="row mb-3">

    <div className="col">
  <span>Numéro du téléphone</span> 
      <input type="number"  onChange={(e) => setTélephone(e.target.value)} name="télephone"  className="form-control"  />
    </div>
    <div className="col">
  <span>Date de naissance</span> 

      <input type="date" className="form-control" />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col">
  <span>Vile</span> 
      <input type="text"  onChange={(e) => setVille(e.target.value)} name="ville" className="form-control" />
    </div>
    <div className="col">
  <span>Code postal</span> 
      <input type="password" className="form-control"/>
    </div>
  </div>
    <div className="btnAjouteCommercial mt-5">
      <button className="buttonAjouter" type="submit">Ajouter un commercial</button>
    </div>
</form>
</div>
    </div>

    </>
}
export default AjouterCommecial;