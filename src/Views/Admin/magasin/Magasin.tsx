import Sidebare from "../Sidbare/Sidebare";
import "../categories/Categories"
import logoMagasin from "../IMG/s1.png"
import "./magasin.css"
import { Link } from "react-router-dom";
export default function Magasin(){
    return <> 
        <Sidebare/>    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <div className="categ">
  <div className="container mt-5">
    <div className="row height">
      <div className="col-md-6">
        <div className="form ">
          <i className="fa fa-search" />
          <input type="text" className="form-control form-input" placeholder="Recherch un magasin, ..." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
          <Link to="/magasin/create">
          <button className="btnAjoutee">Créer un magasin</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container magasin">
  <div className="magasinInfo">

  <h5>My little garage</h5>
  <img src={logoMagasin} alt="" />
  </div>
<div className="card">
  <div className="location">

    <p><i className="bi bi-geo"></i> bd Mohamed Zerktouni, 1°et., Grand Casablanca </p>
    <div className="etoile">

    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <span>(30K)</span>
    </div>
  </div>
    <p className="descmag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, odit Tempora harum repellendus error assumenda rem quae rerum deserunt? Impedit,<br />
     eius quasi quas ducimus sint est magni quibusdam exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, odit Tempora harum repellendus error assumenda rem quae rerum deserunt? Impedit,
     eius quasi quas ducimus sint est magni quibusdam exercitationem.</p>
     <Link to="/magasin/edit"><a className="voirPlus" href=""> plus de details  <i className="bi bi-arrow-right-short" /></a></Link>
</div>
</div>
<div className="container magasin">
  <div className="magasinInfo">

  <h5>My little garage</h5>
  <img src={logoMagasin} alt="" />
  </div>
<div className="card">
  <div className="location">

    <p><i className="bi bi-geo"></i> bd Mohamed Zerktouni, 1°et., Grand Casablanca</p>
    <div className="etoile">

    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <i className="bi bi-star-fill"></i>
    <span>(30K)</span>
    </div>
  </div>
  <p className="descmag">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, odit Tempora harum repellendus error assumenda rem quae rerum deserunt? Impedit,<br />
     eius quasi quas ducimus sint est magni quibusdam exercitationem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, odit Tempora harum repellendus error assumenda rem quae rerum deserunt? Impedit,
     eius quasi quas ducimus sint est magni quibusdam exercitationem.</p>
    <Link to="/magasin/edit"><a className="voirPlus" href=""> plus de details  <i className="bi bi-arrow-right-short" /></a></Link>
</div>
</div>
    </>
}