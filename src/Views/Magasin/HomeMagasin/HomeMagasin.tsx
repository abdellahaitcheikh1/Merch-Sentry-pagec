import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import categoryimg from "../../Admin/IMG/1.png"
import categoryimg1 from "../../Admin/IMG/11.png"
import categoryimg2 from "../../Admin/IMG/1.png"
import categoryimg3 from "../../Admin/IMG/111.png"
import pMagasin from "../../Admin/IMG/3.png"
import pMagasin1 from "../../Admin/IMG/e1.png"
import pMagasin2 from "../../Admin/IMG/e2.png"
import pMagasin3 from "../../Admin/IMG/e3.png"



import {Swiper , SwiperSlide} from"swiper/react"
import "./HomeMagasin.css"
import logoecathlon from "../../Admin/IMG/nike-air-max-sneakers-shoe-air-jordan-men-shoes-45af4ec7176bad26683ab00a9e5623ca.png"
import { Link } from "react-router-dom";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
import { useEffect, useState } from "react";
import AfficheProductsService from "../../../Services/Admin/AfficheProductsService";
export interface ProductType{

  product : ArticleInfo[],
  messageErros:string,
}
    
export function HomeMagasin(){
  const [state , setState] = useState<ProductType>({
    product:[] as ArticleInfo[],
    messageErros : "accune produit",

})
useEffect(()=>{
    setState({...state })
        AfficheProductsService().getProduct()
        .then((res)=>setState({...state  , product:res.data})
        )
        .catch(msg=>setState({...state  , product:msg.messageErros}))
},[]);
const {product , messageErros} = state
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
        <div className="container">

        <h5 className="mt-5"><b>Bienvenue ! </b> vous pouvez gérer votre stock en toute simplicité</h5>
        </div>
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
        {product.length>0? product.map(pro=>(

        <SwiperSlide>

        <div className="box">
          <div className="slidImage">
            <img src={pMagasin} alt="" />
            {/* <img src={`http://127.0.0.1:8000/storage/${pro.image}`} alt="" /> */}

            <div className="overlay">
            </div>
          </div>
          <div className="detailBoxMagasin">

            <div className="type">

              <p className="paran">{pro.Designation}</p>
              <i className="bi bi-cart-plus"></i>
            </div>
            <div className="price"><p>{pro.PrixVenteArticleTTC}<span>/P.U</span></p></div>
          </div>
        </div>
        </SwiperSlide>
        )):""
      }
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
        {product.length>0? product.map(pro=>(

             <SwiperSlide>
             <Link className="parantbox" to="/afficheProduit">

<div className="boxSponsore">
      <div className="slideImgSponsorem">
      <img src={categoryimg} alt="" />
        <div className="overlay">
        </div>
      </div>
    </div>
    </Link>
    </SwiperSlide>

        )):""
      }
        </Swiper>


</div>
</div>
    </>
}