import Sidebare from "../Sidbare/Sidebare";
import "./message.css"

export default function MessageSuccess(){
    return <>
    <Sidebare/>
    <div className="container message-success">
        <div className="message-content">
        <i className="icon-sucess bi bi-check-lg"></i>
            <h4 className="message-content">Félicitations ! Votre produit ajouté avec succès.</h4>
        </div>
    </div>
    </>
}