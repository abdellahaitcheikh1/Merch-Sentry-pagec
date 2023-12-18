import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import categoryimg from "../../Admin/IMG/nike-air-max-sneakers-shoe-air-jordan-men-shoes-45af4ec7176bad26683ab00a9e5623ca.png"
import {Swiper , SwiperSlide} from"swiper/react"
import "./HomeMagasin.css"
import logoecathlon from "../../Admin/IMG/nike-air-max-sneakers-shoe-air-jordan-men-shoes-45af4ec7176bad26683ab00a9e5623ca.png"
import { Link } from "react-router-dom";
export function HomeMagasin(){
    return <>
    <SideBareMagasin/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <div className="categ">
      <Link to="/panier">
        <div className="panier">
        <i className="bi bi-cart3"></i>
        <span className="num">1</span>
        </div>
        </Link>
        <h2 className="container mt-3">Bienvenu</h2>
  <div className="container mt-5">
    <div className="row height">
      <div className="col-md-6">
        <div className="form ">
          <i className="fa fa-search" />
          <input type="text" className="form-control form-input" placeholder="Recherch un produit , ref .." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
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
        <Link to="/afficheProduit">

        <div className="box">
          <div className="slidImage">
            <img src={categoryimg} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxMagasin">

            <div className="type">

              <p>shirt black</p>
              <i className="bi bi-cart-plus"></i>
            </div>
            <p className="price">100 MAD</p>
          </div>
        </div>
        </Link>
        </SwiperSlide>

        <SwiperSlide>
        <Link to="/afficheProduit">

        <div className="box">
          <div className="slidImage">
            <img src={categoryimg} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxMagasin">
            <div className="type">
              <p>shirt black</p>
              <i className="bi bi-cart-plus"></i>

            </div>
            <p className="price">100 MAD</p>
          </div>
        </div>
        </Link>
        </SwiperSlide>

        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={categoryimg} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxMagasin">
            <div className="type">
              <p>shirt black</p>
              <i className="bi bi-cart-plus"></i>

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
          <div className="detailBoxMagasin">
            <div className="type">
              <p>shirt black</p>
              <i className="bi bi-cart-plus"></i>

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
          <div className="detailBoxMagasin">
            <div className="type">
              <p>shirt black</p>
              <i className="bi bi-cart-plus"></i>

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
          <div className="detailBoxMagasin">
            <div className="type">
              <p>shirt black</p>
              <i className="bi bi-cart-plus"></i>

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
          <div className="detailBoxMagasin">
            <div className="type">
              <p>shirt black</p>
              <i className="bi bi-cart-plus"></i>

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