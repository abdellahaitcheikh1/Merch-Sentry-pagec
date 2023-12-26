import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import ProductImage from "../../Admin/IMG/nike-air-max-sneakers-shoe-air-jordan-men-shoes-45af4ec7176bad26683ab00a9e5623ca.png"
import "./ProduitMagasin.css"
import { Link } from "react-router-dom";
export default  function ProduitMagasin(){
    return <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

    <SideBareMagasin/>
    <div className="container mt-5">
    <div className="row height">
      <div className="col-md-6">
        <div className="form ">
          <i className="fa fa-search" />
          <input type="text" className="form-control form-input" placeholder="Recherch un produit , ref .." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
          <Link to="/magasin/ajouter-produit"><button className="btnAjouteM">Ajouter Produit</button></Link>
        </div>
      </div>
    </div>
  </div>
    <div className="container">
        <div className="itemPro">

        <div className="card" id="allItems">
        <div className="iconPoint">
            <i className="bi bi-three-dots-vertical"></i>
            </div>
            <Link className="txN" to="/changeInfo">
            <div className="contentMagasinP">
                <div className="Itemimg">
                <img src={ProductImage} alt="" /><br />
                <span>100 MAD</span>
                </div>
                <div className="infoPM">

                <p>nouvelles chaussures Nike</p><br />
                <span>+300 ventes </span>    
                </div>
            </div>
            <div className="btnVP">
            <Link to=""><a href="">plus de détails <i className="bi bi-arrow-right-short"></i></a></Link>
            </div>
        </Link>
        </div>

        </div>

        <div className="itemPro">

        <div className="card" id="allItems">
        <div className="iconPoint">
            <i className="bi bi-three-dots-vertical"></i>
            </div>

            <Link className="txN" to="/changeInfo">

            <div className="contentMagasinP">
                <div className="Itemimg">
                <img src={ProductImage} alt="" /><br />
                <span>100 MAD</span>
                </div>
                <div className="infoPM">

                <p>nouvelles chaussures Nike</p><br />
                <span>+300 ventes </span>    
                </div>
            </div>
            <div className="btnVP">
            <Link to=""><a href="">plus de détails <i className="bi bi-arrow-right-short"></i></a></Link>
            
            </div>
        </Link>

        </div>

        </div>
        <div className="itemPro">

        <div className="card" id="allItems">
        <div className="iconPoint">
            <i className="bi bi-three-dots-vertical"></i>
            </div>

            <div className="contentMagasinP">
                <div className="Itemimg">
                <img src={ProductImage} alt="" /><br />
                <span>100 MAD</span>
                </div>
                <div className="infoPM">

                <p>nouvelles chaussures Nike</p><br />
                <span>+300 ventes </span>    
                </div>
            </div>
            <div className="btnVP">
            <Link to=""><a href="">plus de détails <i className="bi bi-arrow-right-short"></i></a></Link>
            </div>
        </div>

        </div>
        
        
    </div>
    </>
}