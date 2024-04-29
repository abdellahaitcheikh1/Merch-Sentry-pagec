import SideBareMagasin from "../../Magasin/SideBareMagasin/SideBareMagasin";
import Sidebare from "../Sidbare/Sidebare";
import "./message.css"
export default function MessageAddArticleInMagasin(){
    return <>
    <SideBareMagasin/>
    <div className="container message-success">
        <div className="message-content">
        <i className="icon-sucess-commercial bi bi-check-lg"></i>
            <h4 className="message-content">Félicitations ! Votre produit ajouté avec succès.</h4>
        </div>
    </div>
    </>
}