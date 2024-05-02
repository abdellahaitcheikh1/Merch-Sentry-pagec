// import React from 'react'
import './HistoriqueCommercial.css'
import SideBareCommercial from '../SideBareCommercial/SideBareCommercial'
import CAT1 from "../../Admin/IMG/1.png"

const HistoriqueCommercial = () => {
    return (
        <div>
            <SideBareCommercial />
            <div className='container_Hestoriq'>
                <h5 className="mt-5"><b id="h5Hc">Bienvenue ,</b> choisis les produits que vous êtes le plus l'aise de vendre !</h5>
                <div className="container_div mt-5">
                    <div className="">
                        <div className="">
                            <div className="position-relative">
                                <i className="fa fa-search fa-2x position-absolute" style={{ top: '50%', transform: 'translateY(-50%)', left: '10px' }} />
                                <input type="text" className="form-control form-input pl-4" placeholder="Recherch un produit, ref .." />
                                <i className="bi bi-sliders fa-2x position-absolute" style={{ top: '50%', transform: 'translateY(-50%)', right: '10px' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='container_Hestoriq'>
                <section className="articles">    
                    <article>

                        <div className="article-wrapper">
                            <div style={{display:'flex'}}>
                                <figure>
                                    <img src={CAT1} alt="" />
                                </figure>
                                <h4>Chain Proro</h4>
                            </div>
                            <div className="article-body">

                                <p>
                                    Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                                </p>
                                <a href="#" className="read-more">
                                    Read more <span className="sr-only">about this is some title</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article>

                        <div className="article-wrapper">
                            <div style={{display:'flex'}}>
                                <figure>
                                    <img src={CAT1} alt="" />
                                </figure>
                                <h4>Chain Proro</h4>
                            </div>
                            <div className="article-body">

                                <p>
                                    Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                                </p>
                                <a href="#" className="read-more">
                                    Read more <span className="sr-only">about this is some title</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article>

                        <div className="article-wrapper">
                            <div style={{display:'flex'}}>
                                <figure>
                                    <img src={CAT1} alt="" />
                                </figure>
                                <h4>Chain Proro</h4>
                            </div>
                            <div className="article-body">

                                <p>
                                    Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                                </p>
                                <a href="#" className="read-more">
                                    Read more <span className="sr-only">about this is some title</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article>

                        <div className="article-wrapper">
                            <div className='image-tilel'>
                                <figure>
                                    <img src={CAT1} alt="" />
                                </figure>
                                <h4>Chain Proro</h4>
                            </div>
                            <div className="article-body">

                                <p>
                                    Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                                </p>
                                <a href="#" className="read-more">
                                    Read more <span className="sr-only">about this is some title</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
}

export default HistoriqueCommercial