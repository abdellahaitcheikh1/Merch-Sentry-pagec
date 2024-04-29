import { Link } from "react-router-dom";
import "./historique.css"
import "./historiqueQuery.css"
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import { useContext } from "react";
import { MagasinContext } from "../../../Context/MagasinContext";
export default function HistoriqueMagasin(){
  const magasinContext = useContext(MagasinContext);
    const MagasinId = localStorage.getItem('MagasinId');
      const id = MagasinId || magasinContext.id?.id;
    return<>
    <SideBareMagasin/>
    <div className="container mt-5">

    <h4>Historique des commandes</h4>
    <div className="filtreElement mb-5">
    <Link to="" className="btnFilterS"><a>Cette semaine</a></Link>
    <Link to="" className="btnFilterM"><a >Ce mois </a></Link> 
    </div>
    <div className="tableInfo">
  <table className="table  table-bordered ">
    <thead>
      <tr>
        <th scope="col" className="ncom">N de commande</th>
        <th scope="col">Date</th>
        <th scope="col">Montant</th>
        <th scope="col">Unité</th>
        <th scope="col">Statut</th>
        


      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
      <Link className="columnTable" to={`/magasins/${id}/historiques/id`}>
        6484011
      </Link>
      </td>
        <td>10/10/2023</td>
        <td>1000 MAD</td>
        <td>5</td>
        <td>En cours</td>
      </tr>
      <tr>
        <td>2234789</td>
        <td>13/10/2023</td>
        <td>4000 MAD</td>
        <td>12</td>
        <td>Validé</td>
      </tr>
      <tr>
        <td>3756420</td>
        <td>18/10/2023</td>
        <td>547 MAD</td>
        <td>3</td>
        <td>Annulé</td>
      </tr>
    </tbody>
  </table>
</div>


</div>

        
    </>
}