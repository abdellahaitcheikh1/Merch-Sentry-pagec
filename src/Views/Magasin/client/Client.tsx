import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./client.css"
export default function Client(){
    return <>
    <SideBareMagasin/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <div className="container mt-5">
    <div className="row height">
      <div className="col-md-6">
        <div className="form ">
          <i className="fa fa-search" />
          <input type="text" className="form-control form-input" placeholder="Recherch un client.." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
          <Link to="/magasin/client/ajouter"><button className="btnAjouteC">Ajouter client</button></Link>
        </div>
      </div>
    </div>

    <div className="tableInfo">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col" className="ncom">Prénom</th>
        <th scope="col">Nom</th>
        <th scope="col">Numéro du téléphone</th>
        <th scope="col">Ville</th>
        <th scope="col">Solde</th>


      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wassim</td>
        <td>Zineb</td>
        <td>0632416200</td>
        <td>Rabat</td>
        <td>519 MAD</td>
      </tr>
      <tr>
        <td>Youness</td>
        <td>Challab</td>
        <td>0699417291</td>
        <td>Tanger</td>
        <td>900 MAD</td>
      </tr>
      <tr>
        <td>Abdellah</td>
        <td>Aitcheikh</td>
        <td>0645772987</td>
        <td>Fes</td>
        <td>1100 MAD</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    </>
}