import { Link } from "react-router-dom";
import SidBarClient from "./SideBarClient";
import "./homeclient.css"
import catProduit from "../../Admin/IMG/1.png"
import logovisa from "./logo visa.png"
import logosimvisa from "./logo plusVisa.png"


import catProduit1 from "../../Admin/IMG/11.png"
import catProduit2 from "../../Admin/IMG/111.png"
import ImageProduit1 from "../../Admin/IMG/e2.png"
import ImageProduit2 from "../../Admin/IMG/e1.png"
import ImageProduit3 from "../../Admin/IMG/3.png"
import ImageProduit4 from "../../Admin/IMG/e3.png"
import {Swiper , SwiperSlide} from"swiper/react"
export default function HomeClient(){
    return<>
    <SidBarClient/>
    <div className="container">
        <h1 className="title-i-client">MERCHSENRTY</h1>
<h4>Bienvenue, profitez de votre solde pour achetez tous ce qui vous avez besoin!</h4>
    <div className="row">
    <div className="col-9 col-70">
        <div className=" mt-5">
        <div className="form forme ">
          <i className="fa fa-search" />
          <input type="text" className="form-control form-input" placeholder="Recherchez un produit , ref .." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
        </div>
      </div>
      <div className="equipement">
        <div className="bar-title-client">
            <h4>Equipements</h4>
            <div className="pod">

            <Link className="vp-client" to="">Voir plus</Link>
            </div>

        </div>
        <Swiper
      
      freeMode={true}
      grabCursor={true}
      className="container mt-5 myswiper"
      breakpoints={{
        0:{
          slidesPerView:1,
          spaceBetween:10,
        },
        480:{
          slidesPerView:2,
          spaceBetween:10,
        },
        700:{
          slidesPerView:3,
          spaceBetween:10,
        }
      }}
      >
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={ImageProduit3} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">I-FLUX 200</p>
            </div>
            <p className="price">15 120 MAD<span>/P.U</span></p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={ImageProduit2} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">DPF FLUSH</p>
            </div>
            <p className="price">7 720 MAD<span>/P.U</span></p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={ImageProduit1} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">AT-FLUX 3</p>
            </div>
            <p className="price">75 038 MAD<span>/P.U</span></p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={ImageProduit4} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">4-WAY Flux </p>
            </div>
            <p className="price">4 092 MAD<span>/P.U</span></p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={ImageProduit1} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">AT-FLUX 3</p>
            </div>
            <p className="price">15 120 MAD<span>/P.U</span></p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={ImageProduit1} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">AT-FLUX 3</p>
            </div>
            <p className="price">15 120 MAD<span>/P.U</span></p>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={ImageProduit1} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">AT-FLUX 3</p>
            </div>
            <p className="price">15 120 MAD<span>/P.U</span></p>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>

        <div className="equipement">
        <div className="bar-title-client">
            <h4>Equipements</h4>
            <div className="pod">

            <Link className="vp-client" to="">Voir plus</Link>
            </div>

        </div>
        </div>
<Swiper
      
      freeMode={true}
      grabCursor={true}
      className="container mt-5 myswiper"
      breakpoints={{
        0:{
          slidesPerView:1,
          spaceBetween:10,
        },
        480:{
          slidesPerView:2,
          spaceBetween:10,
        },
        700:{
          slidesPerView:3,
          spaceBetween:10,
        }
      }}
      >
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgcategori">
          <img src={catProduit} alt="" />
            <div className="overlay">
            </div>
            <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">Chain Pro</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgcategori">
          <img src={catProduit1} alt="" />
            <div className="overlay">
            </div>
            <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">Deblock SHOCK</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="boxSponsore">
          <div className="slideImgcategori">
          <img src={catProduit2} alt="" />
            <div className="overlay">
            </div>
            <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">SUPER 5.1</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgcategori">
          <img src={catProduit} alt="" />
            <div className="overlay">
            </div>
            <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">C1200+</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgcategori">
          <img src={catProduit2} alt="" />
            <div className="overlay">
            </div>
            <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">SUPER 5.1</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgcategori">
          <img src={catProduit1} alt="" />
            <div className="overlay">
            </div>
            <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name">SUPER 5.1</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgcategori">
          <img src={catProduit} alt="" />
            <div className="overlay">
            </div>
            <div className="Box-info-product-client">
            <div className="parant-name">
              <p className="product-name" >SUPER 5.1</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>
      </div>
      
        </div>

        <div className="col-3 col-30">
        <div className="card-visa">
            <img className="visa" src={logovisa} alt="" />
            <div className="sim-visa">
                <img className="sim" src={logosimvisa} alt="" />
            </div>
            <div className="num-card">
                <h5><span>4000</span>   <span>1234</span> <span>5678</span>  <span>9012</span></h5>
            </div>
            <div className="d-card">
                <div className="df">
                    <h5>01/30</h5>
                </div>
                <div className="code-card">
                    <h5>123</h5>
                    </div>

            </div>
            <h5 className="card-name">Nour</h5>
        </div>
        </div>

    </div>
    </div>
    </>
}