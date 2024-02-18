import { Link } from "react-router-dom"
import Sidebare from "../Sidbare/Sidebare"
import "../categories/ajouterProduit.css"
import { ArticleInfo } from "../../../Modeles/ArticleModel"

const ModifierProduit:React.FC<ArticleInfo> = ({
          Designation,
          PrixVenteArticleTTC,
          Description,
          image,
          stock,
          RefArticle,
    }) => {
      return (
      <>
      <Sidebare/>
      <div className="container mt-5">
  <form action="" method="post">
      <div className="barRetour">
        <span className="iconRetour">
          <Link to="/categories"><i className="bi bi-arrow-left-short"></i></Link>
          
        </span>
    </div>
  <div className="marque">
  
  <h4 className="mb-3">Ajouter un nouveau produit</h4>
  </div>
  <div className="row" style={{marginTop:"-80px"}}>
    <div className="col inputs">
      <div className="col-6">
          <span>Nom de produit</span>
      <input type="text" className="form-control mb-3" value={Designation} id="nom" />
    </div>
    <div className="col-9 form-floating">
    <span className="spandesc">Description</span>
  
    <textarea  className="form-control" value={Description} id="floatingTextarea2" style={{height: 100}} defaultValue={""} />
    <span className="nwrite">0/1000</span>
  
  </div>
  
    <div className="col-6">
          <span>Categorie</span>
      <input type="text " className="form-control mb-3" placeholder="Exemple@gmail.com" id="nom" />
    </div>
    <div className="row mt-3" >
    <div className="col">
    <span className="">Qunatité </span>
  
      <input value={stock}  type="text" className="form-control"  />
    </div>
  
    <div className="col">
    <span className="">Réference </span>
      <input value={RefArticle} type="text" className="form-control" />
    </div>
  </div>
      </div>
      <div className="col">
          <div className="textUp text-center ">
          <span className="spanPP">Photo de produit </span>
          </div><br />
          
          
          <div className="photoC">
  
      <input  type="file"  id="ImportPhotos" />
      <label className="photoIploade1" htmlFor="ImportPhotos" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit</label>    
  
      <input type="file" name="" id="ImportPhotos" />
      <label className="photoIploade1" htmlFor="ImportPhotos" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit</label>    
          </div>
    <input type="file" name="" id="ImportPhoto" />
      <label className="photoIploadeF" htmlFor="ImportPhotos" ><span><i className="bi bi-images"></i></span> <br /> Importe une photo de produit <br />
      jpg , png , jpeg </label>
     <div id="wiconbtn" className="row mt-3">
    <div className="col">
    <span className="">Prix </span>
  
      <input value={PrixVenteArticleTTC} name="PrixVenteArticleTTC" />
    </div>
  
    <div className="col">
    <span className="">Unité </span>
      <input name="Unite"  type="Number" className="form-control"  />
    </div>
      <br />
      <div className="parent-button">
      <button className="btn-ajouter-produit" type="submit">Confirmer</button>
        </div>
  </div>
  
      </div>
      </div>
      </form>
      </div>

      </>

       )
  }
  export default ModifierProduit;