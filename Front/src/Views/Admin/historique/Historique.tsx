import { Link } from "react-router-dom";
import Sidebare from "../Sidbare/Sidebare";
import "./historique.css"
export default function Historique(){
    return<>
    <Sidebare/>
    <div className="container mt-5">

    <h4>Historique des commandes</h4>
    <div className="filtreElement">
    <Link to="" className="btnFilterS"><a>Cette semaine</a></Link>
    <Link to="" className="btnFilterM"><a >Ce mois </a></Link> 
    </div>
    <div className="tableInfo">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col" className="ncom">N de commande</th>
        <th scope="col">Date</th>
        <th scope="col">Montant</th>
        <th scope="col">Unité</th>
        <th scope="col">Statut</th>
        <th scope="col">Demandez de</th>


      </tr>
    </thead>
    <tbody>
      <tr>
        <td>6484011</td>
        <td>10/10/2023</td>
        <td>1000 MAD</td>
        <td>5</td>
        <td>En cours</td>
        <td><a href="" className="remborser">Se remborser</a><br /><a href="" className="echanger">Echanger</a></td>
      </tr>
      <tr>
        <td>2234789</td>
        <td>13/10/2023</td>
        <td>4000 MAD</td>
        <td>12</td>
        <td>Validé</td>
        <td><a href="" className="remborser">Se remborser</a><br /><a href="" className="echanger">Echanger</a></td>
      </tr>
      <tr>
        <td>3756420</td>
        <td>18/10/2023</td>
        <td>547 MAD</td>
        <td>3</td>
        <td>Annulé</td>
        <td><a href="" className="remborser">Se remborser</a><br /><a href="" className="echanger">Echanger</a></td>
      </tr>
    </tbody>
  </table>
</div>


</div>

        
    </>
}