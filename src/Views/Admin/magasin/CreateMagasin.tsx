import { Link } from "react-router-dom";
import Sidebare from "../Sidbare/Sidebare";
export default function CreateMagasin(){
    return<>
    <Sidebare/>
    <div className="container mt-5">
    <div className="barRetour">
      <span className="iconRetour">
        <Link to="/magasin"><i className="bi bi-arrow-left-short"></i></Link>
        
      </span>
  </div>
<div className="marque">

<h4 className="">Créer un nouveau magasin</h4>
</div>
<div className="row" style={{marginTop:"-50px"}}>
<div className="col inputs">
    <div className="col-6">
        <span>Nom de magasin</span>
    <input type="text" className="form-control mb-3" placeholder="Nike" id="nom" />
  </div>
  <div className="col-6">
        <span>Nom complet de proprietaire</span>
    <input type="text" className="form-control mb-3" placeholder="Magasin Nike" id="nom" />
  </div>
  <div className="col-6">
        <span>E-mail</span>
    <input type="text" className="form-control mb-3" placeholder="Exemple@gmail.com" id="nom" />
  </div>
  <div className="col-6">
        <span>Numéro de téléphone</span>
    <input type="text" className="form-control mb-3" placeholder="+212 6 21 00 34 62" id="nom" />
  </div>
  <div className="col-6 hero ">
        <span>Localisation</span>
    <input type="text" className="form-control mb-3" placeholder="Casablanca Anoual "  id="nom"/>
  </div>
    </div>
    <div className="col">
        <div className="textUp text-center ">
        <span className="">Logo de magasin</span>
        </div><br />
    <input type="file" name="" id="ImportPhoto" />
    <label className="photoIploade" htmlFor="ImportPhoto" ><span><i className="bi bi-images"></i></span> <br /> Resolution minimal <br /> 250px * 250px </label>    
    <br /><a href="">Confirmer</a>
    </div>
    </div>

    </div>

    </>
}