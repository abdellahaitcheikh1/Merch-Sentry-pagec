import Sidebare from "../Sidbare/Sidebare"
import {Swiper , SwiperSlide} from"swiper/react"
import"swiper/css"
import"swiper/css/free-mode"
import "bootstrap/dist/css/bootstrap.min.css"
import ImageProduit1 from "../IMG/1.png"
import ImageProduit2 from "../IMG/2.png"
import ImageProduit3 from "../IMG/3.png"
import ImageProduit4 from "../IMG/4.png"
import Sponsor1 from "../IMG/s1.png"
import Sponsor2 from "../IMG/s2.png"
import Sponsor3 from "../IMG/s3.png"
import Sponsor4 from "../IMG/s4.png"


import { Link } from "react-router-dom"

export default function(){
    return <>
    <Sidebare/>
    	<div className="home mt-5" >
  <main className="container">
    <div className="head-title">
      <div className="left">
        <h5><b>Bienvenue ! </b> vous pouvez gérer votre stock en toute simplicité</h5>
        <p className="container mt-5 mb-5">Vous avez +5,000 produits</p>
      </div>
    </div>
  </main>
  <br /> <br />

  {/* ----------------------------------- PRODUIT SLIDE ------------------------------------ */}

  <div className="container-fluid ProductSlide">
    <a className="right-align" href="#">Voir Plus <i className="bi bi-arrow-right-short" /></a>
    <Swiper
      
      freeMode={true}
      grabCursor={true}
      className="container myswiper"
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
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
          <img src={ImageProduit1} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="ParantName">
            <p className="nameProduct">Intake Pro Diesel</p>
            </div>
            <div className="price"><p>230 MAD <span>/P.U</span></p></div>
          </div>
        </div>
        </Link>

        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
          <img src={ImageProduit2} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="ParantName">
                  <p className="nameProduct">R-Flush Radiator</p>
              </div>
<div className="price"><p>490 MAD <span>/P.U</span></p>
</div>          
</div>
        </div>
        </Link>

        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
            <img src={ImageProduit3} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="ParantName">
<p className="nameProduct">I-FLUX 200</p>            </div>
<div className="price"><p>15 120 MAD <span>/P.U</span></p></div>          </div>
        </div>
        </Link>

        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
          <img src={ImageProduit4} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="ParantName">
<p className="nameProduct">Diesel Multi 5l</p>            </div>
<div className="price"><p>2900 MAD <span>/P.U</span></p></div>          </div>
        </div>
        </Link>

        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
          <img src={ImageProduit4} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="ParantName">
              <p className="nameProduct">Intake Pro Diesel</p>            
            </div>
          <div className="price"><p>230 MAD <span>/P.U</span></p></div>
            </div>
        </div>
        </Link>

        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
          <img src={ImageProduit4} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="ParantName">
<p className="nameProduct">Intake Pro Diesel</p>            </div>
<div className="price"><p>230 MAD <span>/P.U</span></p></div>          </div>
        </div>
        </Link>


        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
          <img src={ImageProduit4} alt="" />

            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="ParantName">
<p className="nameProduct">Intake Pro Diesel</p>            </div>
<div className="price"><p>230 MAD <span>/P.U</span></p></div>          </div>
        </div>
        </Link>
        </SwiperSlide>
      </Swiper>

  </div>

  {/*----------------------------------- SPONSOR SLIDE --------------------------------------- */}
  
  <div className="mt-3 container-fluid ProductSlide">
    <p className="container pMagazin mt-3">Vous avez +20 magasins</p>
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
          <div className="slideImgSponsore">
            <img src={Sponsor1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor2} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor3} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor4} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> 

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={Sponsor1} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>

  </div>



</div>

    </>
}