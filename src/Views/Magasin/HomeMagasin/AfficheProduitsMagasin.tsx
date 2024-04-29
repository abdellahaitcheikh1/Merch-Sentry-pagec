import produit from "../../Admin/IMG/1.png"
import { Link } from "react-router-dom";
import "./afficheProduitmagasin.css"
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import { ArticleInfo } from "../../../Modeles/ArticleModel";
import { useEffect, useState } from "react";
import AfficheProductsService from "../../../Services/Admin/AfficheProductsService";
import AfficheArticleById from "../../../Services/Magasin/AfficheArticleById";

const AfficheProduitsMagasin: React.FC<ArticleInfo> = ({
    IdArticle,
    Designation,
    PrixVenteArticleTTC,
    Description,
    image,
    stock,
    quantité,
    RefArticle,
    LibelleSubstitut,
}) => {
    const [articles, setArticles] = useState<ArticleInfo[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (IdArticle !== undefined) {
                    const response = await AfficheProductsService().getProduct();
                    setArticles([...articles, response.data]);
                }
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };
    
        fetchData();
    }, [IdArticle]);

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <>
            <SideBareMagasin />
            <div className="container produitCard mt-5">
                <Link to="" onClick={handleGoBack}><i className="bi bi-arrow-left-short"></i></Link>

                {articles.map((article) => (
                    <div>
                        <div className="barTitle paniercommercial">
                            <h3>{article.Designation}</h3>
                            <i className="bi bi-cart3 icon"><span>1</span></i>
                        </div>

                        <div className="cardItem mt-5">
                            <img src={produit} alt="" />
                            <div className="ItemsInfo">
                                <h2 className="mb-5">Prix : {article.PrixVenteArticleTTC} MAD</h2>
                                <div className="quantity">
                                    <h6>Quantité <input className="inputQ" value={article.quantité} type="number" min={1} /> </h6>
                                </div>
                                <button className="ajouterP">Ajouter au panier</button>
                            </div>
                        </div>
                        <div className="sectionDesc">
                            <h4 className="desch4">Description</h4>
                            <div className="descriptione mt-3 mb-5" >
                                <p>{article.Description}</p>
                                <h5>Référence : <span>{article.RefArticle}</span></h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AfficheProduitsMagasin;
