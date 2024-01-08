import { Link } from "react-router-dom";
import SideBareCommercial from "../SideBareCommercial/SideBareCommercial";
import "./AfficheProduit.css"
import IMGProduit from"../../Admin/IMG/1.png"
import IMGProduit2 from"../../Admin/IMG/e1.png"
import IMGProduit3 from"../../Admin/IMG/11.png"
import IMGProduit4 from"../../Admin/IMG/e2.png"
import IMGProduit5 from"../../Admin/IMG/2.png"
import IMGProduit6 from"../../Admin/IMG/3.png"
import IMGProduit7 from"../../Admin/IMG/4.png"
export default function AfficheProduitCommercial(){
    return <>
        <SideBareCommercial/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="allproductCommercial">
        <div className="form formcommercial mt-5 ">
          <i className="fa fa-search" />
          <input type="text" className="form-control form-input" placeholder="Recherch un produit , ref .." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
        </div>
            <div className="row container mx-auto">
            <div className="col-lg-4 col-md-3 col-12">
                <div className="box boxcomercial">
          <div className="slidImages bar1">
          <img src={IMGProduit} alt="" />
          <p>Chain Proro</p>
          </div>
          <div className="bar2">
                        <ul>
                            <li><b>. </b><span className="vent">+50</span> Ventes</li>
                            <li><b>. </b><span className="annule">10</span> Annulés</li>
                            <li><b>. </b><span className="remborse">0</span> Remboursés</li>

                        </ul>
                    </div>
          <div className="bar3">
          <Link className="buttonfleche" to=""><button><i className="bi bi-arrow-up-right"></i></button></Link>
          </div>
        </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12">
                <div className="box boxcomercial">
          <div className="slidImages bar1">
          <img src={IMGProduit3} alt="" />
          <p>Super 5.1</p>
          </div>
          <div className="bar2">
                        <ul>
                            <li><b>. </b><span className="vent">30</span> Ventes</li>
                            <li><b>. </b><span className="annule">5</span> Annulés</li>
                            <li><b>. </b><span className="remborse">1</span> Remboursés</li>

                        </ul>
                    </div>
          <div className="bar3">
          <Link className="buttonfleche" to=""><button><i className="bi bi-arrow-up-right"></i></button></Link>
          </div>
        </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12">
                <div className="box boxcomercial">
          <div className="slidImages bar1">
          <img src={IMGProduit5} alt="" />
          <p>R-Flush Radiator Cleaner 1L</p>
          </div>
          <div className="bar2">
                        <ul>
                            <li><b>. </b><span className="vent">+29</span> Ventes</li>
                            <li><b>. </b><span className="annule">3</span> Annulés</li>
                            <li><b>. </b><span className="remborse">0</span> Remboursés</li>

                        </ul>
                    </div>
          <div className="bar3">
          <Link className="buttonfleche" to=""><button><i className="bi bi-arrow-up-right"></i></button></Link>
          </div>
        </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12">
                <div className="box boxcomercial">
          <div className="slidImages bar1">
          <img src={IMGProduit2} alt="" />
          <p>DPF-Gun Packshot-1000px-768x769 1</p>
          </div>
          <div className="bar2">
                        <ul>
                            <li><b>. </b><span className="vent">+20</span> Ventes</li>
                            <li><b>. </b><span className="annule">0</span> Annulés</li>
                            <li><b>. </b><span className="remborse">3</span> Remboursés</li>

                        </ul>
                    </div>
          <div className="bar3">
          <Link className="buttonfleche" to=""><button><i className="bi bi-arrow-up-right"></i></button></Link>
          </div>
        </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12">
                <div className="box boxcomercial">
          <div className="slidImages bar1">
          <img src={IMGProduit7} alt="" />
          <p>Diesel Multi Conditioner 5L</p>
          </div>
          <div className="bar2">
                        <ul>
                            <li><b>. </b><span className="vent">+18</span> Ventes</li>
                            <li><b>. </b><span className="annule">2</span> Annulés</li>
                            <li><b>. </b><span className="remborse">0</span> Remboursés</li>

                        </ul>
                    </div>
          <div className="bar3">
          <Link className="buttonfleche" to=""><button><i className="bi bi-arrow-up-right"></i></button></Link>
          </div>
        </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12">
                <div className="box boxcomercial">
          <div className="slidImages bar1">
          <img src={IMGProduit6} alt="" />
          <p>I-FLUX 200</p>
          </div>
          <div className="bar2">
                        <ul>
                            <li><b>. </b><span className="vent">+14</span> Ventes</li>
                            <li><b>. </b><span className="annule">1</span> Annulés</li>
                            <li><b>. </b><span className="remborse">5</span> Remboursés</li>

                        </ul>
                    </div>
          <div className="bar3">
          <Link className="buttonfleche" to=""><button><i className="bi bi-arrow-up-right"></i></button></Link>
          </div>
        </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12">
                <div className="box boxcomercial">
          <div className="slidImages bar1">
          <img src={IMGProduit} alt="" />
          <p>Intake Pro Diesel</p>
          </div>
          <div className="bar2">
                        <ul>
                            <li><b>. </b><span className="vent">+14</span> Ventes</li>
                            <li><b>. </b><span className="annule">1</span> Annulés</li>
                            <li><b>. </b><span className="remborse">2</span> Remboursés</li>

                        </ul>
                    </div>
          <div className="bar3">
          <Link className="buttonfleche" to=""><button><i className="bi bi-arrow-up-right"></i></button></Link>
          </div>
        </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12">
                <div className="box boxcomercial">
          <div className="slidImages bar1">
          <img src={IMGProduit4} alt="" />
          <p>AT-FLUX 3</p>
          </div>
          <div className="bar2">
                        <ul>
                            <li><b>. </b><span className="vent">+6</span> Ventes</li>
                            <li><b>. </b><span className="annule">0</span> Annulés</li>
                            <li><b>. </b><span className="remborse">2</span> Remboursés</li>

                        </ul>
                    </div>
          <div className="bar3">
          <Link className="buttonfleche" to=""><button><i className="bi bi-arrow-up-right"></i></button></Link>
          </div>
        </div>
                </div>
                <div className="col-lg-4 col-md-3 col-12">
                <div className="box boxcomercial">
          <div className="slidImages bar1">
          <img src={IMGProduit3} alt="" />
          <p>C1200+</p>
          </div>
          <div className="bar2">
                        <ul>
                            <li><b>. </b><span className="vent">+21</span> Ventes</li>
                            <li><b>. </b><span className="annule">11</span> Annulés</li>
                            <li><b>. </b><span className="remborse">7</span> Remboursés</li>

                        </ul>
                    </div>
          <div className="bar3">
          <Link className="buttonfleche" to=""><button><i className="bi bi-arrow-up-right"></i></button></Link>
          </div>
        </div>
                </div>
            </div>
            </div>
    </>
}