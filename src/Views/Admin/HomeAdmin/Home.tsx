import Sidebare from "../Sidbare/Sidebare"
import {Swiper , SwiperSlide} from"swiper/react"
import"swiper/css"
import"swiper/css/free-mode"
import "bootstrap/dist/css/bootstrap.min.css"
import igg from "../IMG/cap-hat-adidas-cap-png-hd-6dba9558659261a0e0db21f9fcd22894.png"
import sponsor from "../IMG/swoosh-nike-logo-nike-logo-png-5ae4c95bb3ca9d158becf5ba9aa8b9e8.png"
import { Link } from "react-router-dom"

export default function(){
    return <>
    <Sidebare/>
    	<div className="home mt-5" >
  <main className="container ">
    <div className="head-title">
      <div className="left">
        <h5><b>Bienvenue</b> ! vous pouvez gérer votre stock en toute simplicité</h5>
        <p className="container mt-5 mb-5">Vous avez +5000 produits</p>
      </div>
    </div>
  </main>
  <br /> <br />

  {/* ----------------------------------- PRODUIT SLIDE ------------------------------------ */}

  <div className="container-fluid " id="ProductSlide">
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
          <img src={igg} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="type">
              <p>shirt black</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
        </div>
        </Link>

        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
          <img src={igg} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="type">
              <p>shirt black</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
        </div>
        </Link>

        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
            <img src={igg} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="type">
              <p>shirt black</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
        </div>
        </Link>

        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
          <img src={igg} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="type">
              <p>shirt black</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
        </div>
        </Link>

        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
          <img src={igg} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="type">
              <p>shirt black</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
        </div>
        </Link>

        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
          <img src={igg} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="type">
              <p>shirt black</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
        </div>
        </Link>


        </SwiperSlide>
        <SwiperSlide>
      <Link to="/produit">

        <div className="box">
          <div className="slidImage">
          <img src={igg} alt="" />

            <div className="overlay">
            </div>
          </div>
          <div className="detailBox">
            <div className="type">
              <p>shirt black</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
        </div>
        </Link>
        </SwiperSlide>
      </Swiper>

  </div>

  {/*----------------------------------- SPONSOR SLIDE --------------------------------------- */}
  
  <div className="mt-3 container-fluid" id="ProductSlide">
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
            <img src={sponsor} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={sponsor} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={sponsor} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={sponsor} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={sponsor} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={sponsor} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide> 

    <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={sponsor} alt="" />
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