import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import ProductImage from "../../Admin/IMG/2.png"
import ProductImage1 from "../../Admin/IMG/3.png"
import ProductImage2 from "../../Admin/IMG/e1.png"

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
          <Link to="/magasin/ajouter-produit"><button className="btnAjouteM">Ajouter un produit</button></Link>
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
                <p>490 MAD<span className="pu"> / p.u</span></p>
                </div>
                <div className="infoPM">

                <p>R-Flush Radiator Cleaner 1L</p><br />
                <span>+100 ventes </span>    
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
                <img src={ProductImage1} alt="" /><br />
                <p>15 120 MAD <span className="pu"> / p.u</span></p>
                </div>
                <div className="infoPM">

                <p>I-FLUX </p><br />
                <span>+20 ventes </span>    
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
                <img src={ProductImage2} alt="" /><br />
                <p>7 150 MAD <span className="pu"> / p.u</span></p>
                </div>
                <div className="infoPM">

                <p>R-Flush Radiator Cleaner </p><br />
                <span>+40 ventes </span>    
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