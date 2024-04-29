import SideBareCommercial from "../SideBareCommercial/SideBareCommercial";
import CAT1 from "../../Admin/IMG/1.png"
import { Swiper, SwiperSlide } from "swiper/react"
import "./HomeCommercial.css"
import PRODUIT1 from "../../Admin/IMG/3.png"
import PRODUIT2 from "../../Admin/IMG/e1.png"
import PRODUIT3 from "../../Admin/IMG/e2.png"
import PRODUIT4 from "../../Admin/IMG/e3.png"

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AfficheProductsService from "../../../Services/Admin/AfficheProductsService";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
import './HomeCommercial.css';
export interface ProductType {

  product: ArticleInfo[],
  messageErros: string,
}
export default function Home() {
  const [search, setSearche] = useState("");
  const [state, setState] = useState<ProductType>({
    product: [] as ArticleInfo[],
    messageErros: "accune produit",

  })
  const handelSearche = (e: any) => {
    setSearche(e.target.value);
  }
  useEffect(() => {
    setState({ ...state })
    AfficheProductsService().getProduct()
      .then((res) => setState({ ...state, product: res.data })
      )
      .catch(msg => setState({ ...state, product: msg.messageErros }))
  }, []);
  const { product, messageErros } = state
  return <>
    <SideBareCommercial />
    <div className=" container_div">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="categ class_div">
        <h5 className="mt-5"><b id="h5Hc">Bienvenue ,</b> choisis les produits que vous êtes le plus l'aise de vendre !</h5>
        <div className="container_div mt-5">
          <div className="">
            <div className="">
              <div className="position-relative">
                <i className="fa fa-search fa-2x position-absolute" style={{ top: '50%', transform: 'translateY(-50%)', left: '10px' }} />
                <input type="text" onChange={handelSearche} className="form-control form-input pl-4" placeholder="Recherch un produit, ref .." />
                <i className="bi bi-sliders fa-2x position-absolute" style={{ top: '50%', transform: 'translateY(-50%)', right: '10px' }} />
              </div>
            </div>
          </div>
        </div>


        <div className="" id="">


          <Swiper
            freeMode={true}
            grabCursor={true}
            className="container mt-5 myswiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 10,
              }
            }}
          >
            {product && product.length > 0 ?
              product.filter((pro) => {
                return search.toLowerCase() === "" ||
                  pro.Designation.toLowerCase().includes(search.toLowerCase());
              }).length > 0 ? (
                product.filter((pro) => {
                  return search.toLowerCase() === "" ||
                    pro.Designation.toLowerCase().includes(search.toLowerCase());
                }).map((pro) => (
                  <SwiperSlide>

                    <div className="box">
                      <div className="slidImage">
                        <img src={PRODUIT1} alt="" />
                        <div className="overlay">
                        </div>
                      </div>
                      <div className="detailComercial">

                        <div className="type">

                          <p>{pro.Designation}</p>
                        </div>
                        <p className="price">{pro.PrixVenteArticleTTC} MAD <span>/P.U</span>  </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <div className="no-produit">
                  <i className="bi bi-emoji-neutral"></i>
                  <p>Malheureusement, on n‘a pas ce produit pour l’instant.</p>
                </div>
              )
              :
              <div className="">
                <div className="bi-info">
                  <i className="bi bi-info-lg"></i>
                </div>
                <div className="style_text_Accune_product">
                  <h1>Accune product</h1>
                </div>
              </div>
            }
          </Swiper>

        </div>
        <div className="mt-3 container-fluid" id="ProductSlide">
          <div className="Equipements_div">
            <div>
              <h5 className="">Equipements</h5>
            </div>
            <div>
              <a className="" id="vp" href="#">Voir Plus <i className="bi bi-arrow-right-short" /></a>
            </div>
          </div>
          <Swiper

            freeMode={true}
            grabCursor={true}
            className=""
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 10,
              }
            }}
          >
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div style={{ marginTop: '100px' }} className="Equipements_div">
            <div>
              <h5 className="">Lubrifiants</h5>
            </div>
            <div>
              <a className="" id="vp" href="#">Voir Plus <i className="bi bi-arrow-right-short" /></a>
            </div>
          </div>
          <Swiper

            freeMode={true}
            grabCursor={true}
            className=""

            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 4,
                spaceBetween: 10,
              }
            }}
          >
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="carde_style">
              <div className="boxSponsore">
                <div className="  ">
                  <div>
                    <img src={CAT1} alt="" />
                  </div>
                </div>
                <div className="text_commercial_cards">
                  <div className="titel_product_Equipements">
                    <h5 style={{ color: 'white' }}>I-FLUX 200</h5>
                  </div>
                  
                  <div className="price_product_Equipements">
                    <h5 style={{ color: 'white' }} className="text_price">15 120 MAD /P.U</h5>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </div>
    </div>
  </>
}