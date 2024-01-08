import { Link } from "react-router-dom";
import "./ajouterProduit.css"
import Sidebare from "../../Admin/Sidbare/Sidebare";
export default function AjouterProduit(){
    return<>
    <Sidebare/>
    <div className="container mt-5">
    <div className="barRetour">
      <span className="iconRetour">
        <Link to="/categories"><i className="bi bi-arrow-left-short"></i></Link>
        
      </span>
  </div>
<div className="marque">

<h4 className="mb-3">Ajouter un nouveau produit</h4>
</div>
<div className="row" style={{marginTop:"-50px"}}>
<div className="col inputs">
    <div className="col-6">
        <span>Nom de produit</span>
    <input type="text" className="form-control mb-3" placeholder="Nike" id="nom" />
  </div>
  <div className="col-9 form-floating">
  <span className="spandesc">Description</span>

  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
  <span className="nwrite">0/1000</span>

</div>

  <div className="col-6">
        <span>Categorie</span>
    <input type="text" className="form-control mb-3" placeholder="Exemple@gmail.com" id="nom" />
  </div>
  <div className="row mt-3" >
  <div className="col">
  <span className="">Qunatité </span>

    <input type="text" className="form-control" value='500' />
  </div>

  <div className="col">
  <span className="">Réference </span>
    <input type="text" className="form-control" value="52341" />
  </div>
</div>
    </div>
    <div className="col">
        <div className="textUp text-center ">
        <span className="spanPP">Photo de produit </span>
        </div><br />
        <div className="photoC">

    <input type="file" name="" id="ImportPhotos" />
    <label className="photoIploade1" htmlFor="ImportPhoto1" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit</label>    

    <input type="file" name="" id="ImportPhotos" />
    <label className="photoIploade1" htmlFor="ImportPhoto2" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit</label>    
        </div>
  <input type="file" name="" id="ImportPhoto" />
    <label className="photoIploadeF" htmlFor="ImportPhoto3" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit <br />
    jpg , png , jpeg </label>
   <div id="wiconbtn" className="row mt-3">
  <div className="col">
  <span className="">Prix </span>

    <input type="text" className="form-control" value="299 MAD" />
  </div>

  <div className="col">
  <span className="">Unité </span>
    <input type="Number" className="form-control" value={1} />
  </div>
    <br /><a href="mb-5">Confirmer</a>
</div>

    </div>
    </div>

    </div>
    </>
}