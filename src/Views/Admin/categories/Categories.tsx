import Sidebare from "../Sidbare/Sidebare";
import {Swiper , SwiperSlide} from"swiper/react"
import "./categories.css"
import catProduit from "../IMG/1.png"
import catProduit1 from "../IMG/11.png"
import catProduit2 from "../IMG/111.png"
import ImageProduit1 from "../IMG/e2.png"
import ImageProduit2 from "../IMG/e1.png"
import ImageProduit3 from "../IMG/3.png"
import ImageProduit4 from "../IMG/e3.png"
import { Link } from "react-router-dom";
export default function Categories(){
    return <>
    <Sidebare/>    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <div className="categ">
  <div className="container mt-5">
    <div className="row height">
      <div className="col-md-6">
        <div className="form ">
          <i className="fa fa-search" />
          <input type="text" className="form-control form-input" placeholder="Recherchez un produit , ref .." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
          <Link to="/ajouter-produit"><button className="btnAjoutee">Ajouter Produit</button></Link>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid" id="ProductSlide">
    <h5 className="container">Equipements</h5>
    <a className="right-align" href="#">Voir Plus <i className="bi bi-arrow-right-short" /></a>
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
          slidesPerView:4,
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
          <div className="detailBox">
            <div className="type">
              <p>I-FLUX 200</p>
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
          <div className="detailBox">
            <div className="type">
              <p>DPF FLUSH</p>
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
          <div className="detailBox">
            <div className="type">
              <p>AT-FLUX 3</p>
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
          <div className="detailBox">
            <div className="type">
              <p>4-WAY Flux </p>
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
          <div className="detailBox">
            <div className="type">
              <p>AT-FLUX 3</p>
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
          <div className="detailBox">
            <div className="type">
              <p>AT-FLUX 3</p>
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
          <div className="detailBox">
            <div className="type">
              <p>AT-FLUX 3</p>
            </div>
            <p className="price">15 120 MAD<span>/P.U</span></p>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>

  </div>
  <div className="mt-3 container-fluid" id="ProductSlide">
    <p className="pMagazin container mt-3">Lubrifiants</p>
    <a className="right-align" href="#">Voir Plus <i className="bi bi-arrow-right-short" /></a>
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
          slidesPerView:4,
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
            <div className="detailBox">
            <div className="type">
              <p>Chain Pro</p>
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
            <div className="detailBox">
            <div className="type">
              <p>Deblock SHOCK</p>
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
            <div className="detailBox">
            <div className="type">
              <p>SUPER 5.1</p>
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
            <div className="detailBox">
            <div className="type">
              <p>C1200+</p>
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
            <div className="detailBox">
            <div className="type">
              <p>SUPER 5.1</p>
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
            <div className="detailBox">
            <div className="type">
              <p>SUPER 5.1</p>
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
            <div className="detailBox">
            <div className="type">
              <p>SUPER 5.1</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>


</div>
</div>

    </>
}