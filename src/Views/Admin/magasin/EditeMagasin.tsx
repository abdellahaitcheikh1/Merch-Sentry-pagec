import Sidebare from "../Sidbare/Sidebare";
import { Link } from "react-router-dom";
import E1 from "../IMG/3.png"
import E2 from "../IMG/e1.png"
import E3 from "../IMG/e2.png"
import E4 from "../IMG/e3.png"
import Sponsor1 from "../IMG/s3.png"
import {Swiper , SwiperSlide} from"swiper/react"

export default function EditeMagasin(){
    return<>
    <Sidebare/>
    <div className="container mt-5">
    <div className="barRetour">
      <span className="iconRetour">
        <Link to="/magasin"><i className="bi bi-arrow-left-short"></i></Link>
        
      </span>
      <div className="marque">
    <h4> My little garage</h4>
    <img src={Sponsor1} alt="" />
</div>
    </div>
    <div className="inputForm">
    <div className="row mb-3">
  <div className="col">
        <span>Nom complet de proprietaire</span>
    <input type="text" className="form-control" id="nom" placeholder="nike" aria-label="First name" />
  </div>
  
  <div className="col-7" id="inputTele">
    <div className="inputTele">

  <span>Numéro de télephone</span>
    <input type="text" className="form-control" id="tele" placeholder="+212 6 21 47 12 99"  />
    </div>

  </div>
</div>
<div className="col-12">
<span>Localisation</span>
<input type="text" className="form-control" id="inputAddress" value="" placeholder="Casablanca Anoual" />

</div>

    </div>
    </div>
    <div className="text-center mt-3">
  <button className="btnChangeInfo mx-auto">Change les infos </button>
</div>
<div className="container">
<div className="container barcategori">
<h5>Equipements</h5>
<a href="">Voir plus <i className="bi bi-arrow-right-short" /></a>

</div>
<div className="categorieSlide">

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
            <img src={E1} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxEdite">
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
            <img src={E2} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxEdite">
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
            <img src={E3} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxEdite">
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
            <img src={E4} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxEdite">
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
            <img src={E4} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxEdite">
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
            <img src={E4} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxEdite">
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
            <img src={E4} alt="" />
            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxEdite">
            <div className="type">
              <p>shirt black</p>
            </div>
            <p className="price">100 MAD</p>
          </div>
        </div>
        </SwiperSlide>
        </Swiper>
</div>
</div>


    </>
}