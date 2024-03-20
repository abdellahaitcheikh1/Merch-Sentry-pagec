import SideBareMagasin from "../../Magasin/SideBareMagasin/SideBareMagasin";
import Sidebare from "../Sidbare/Sidebare";
import "./message.css"

export default function MessageAddCommercial(){
    return <>
    <SideBareMagasin/>
    <div className="container message-success">
        <div className="message-content">
        <i className="icon-sucess-commercial bi bi-check-lg"></i>
            <h4 className="message-content">Félicitations ! L’ajout de votre nouveau commercial a été effectuée avec succès.</h4>
            <p>Attendez dans un délai de 24 heures pour recevoir le login et le mot de passe de ce <br />
            commercial via votre boîte email.</p>
        </div>
    </div>
    </>
}