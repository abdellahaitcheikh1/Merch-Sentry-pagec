import Sidebare from "../Sidbare/Sidebare";
import categoryimg from "../IMG/nike-air-max-sneakers-shoe-air-jordan-men-shoes-45af4ec7176bad26683ab00a9e5623ca.png"
import {Swiper , SwiperSlide} from"swiper/react"
import "./categories.css"
import logoecathlon from "../IMG/5bbc5e00c4c36-fcc258155d3a899ae16bf71910ea56be.png"
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
          <input type="text" className="form-control form-input" placeholder="Recherch un produit , ref .." />
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
            <img src={categoryimg} alt="" />
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
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={categoryimg} alt="" />
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
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={categoryimg} alt="" />
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
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={categoryimg} alt="" />
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
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={categoryimg} alt="" />
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
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={categoryimg} alt="" />
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
        </SwiperSlide>
        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={categoryimg} alt="" />
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
          <div className="slideImgSponsore">
          <img src={logoecathlon} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={logoecathlon} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={logoecathlon} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={logoecathlon} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={logoecathlon} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={logoecathlon} alt="" />
            <div className="overlay">
            </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="boxSponsore">
          <div className="slideImgSponsore">
          <img src={logoecathlon} alt="" />
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