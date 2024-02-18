import Sidebare from "../Sidbare/Sidebare";
import ImageProduit2 from "../IMG/2.png"
import { Link } from "react-router-dom";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
const AfficheProduit:React.FC<ArticleInfo> = ({
        IdArticle,
        Designation,
        PrixVenteArticleTTC,
        Description,
        image,
        stock,
        RefArticle,
    
  }) => {
        return( <>
    <Sidebare/>
    <div className="container produit-card mt-5">
    <Link to="/"><i className="bi bi-arrow-left-short arrow"></i></Link>
    <div className="bar-title">
        <h3>{Designation}</h3>
        <a href=""><Link to={`/modifier/${IdArticle}`} className="buts">Changer les infos</Link></a>
    </div>
    <div className="card-item mt-5">
        <img className="image-produit" src={`http://127.0.0.1:8000/storage/${image}`} alt="" />
    <div className="item-info">
        <h2 className="price-product mb-5">{PrixVenteArticleTTC} MAD <span className="pu">/P.U</span></h2>
        <h6>Quantité : <span className="quantity-item">{stock}</span> </h6>
        <h6>Réference : <span className="reference-item">{RefArticle}</span> </h6>
    </div>

    </div>
    <div className="description mt-5 mb-5" >
        <h4>Description</h4>
        <p className="mt-3">{Description}</p>
    </div>
    <div className="text-center button-delete mb-3">
    <Link to=""><a href="" className="mx-auto">Supprimer ce produit</a></Link>
</div>

    </div>
    </>
     )
}
export default AfficheProduit;