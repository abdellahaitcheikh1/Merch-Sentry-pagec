import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./commercial.css"
export default function Commercial(){
    return <>
    <SideBareMagasin/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <div className="container mt-5">
    <div className="row height">
      <div className="col-md-6">
        <div className="form ">
          <i className="fa fa-search" />
          <input type="text" className="form-control form-input" placeholder="Recherchez un commercial, ..." />
          <span className="left-pan"><i className="bi bi-sliders"></i></span>
          <Link to="/ajouter-commercial"><button className="btnAjouteC">Ajouter un Commercial</button></Link>
        </div>
      </div>
    </div>

    <div className="tableInfos">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col" className="ncom">Prénom</th>
        <th scope="col">Nom</th>
        <th scope="col">Numéro du téléphone</th>
        <th scope="col">Vendu</th>
        <th scope="col">En cours</th>
        <th scope="col">Annulé</th>


      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Wassim</td>
        <td>Zineb</td>
        <td>0632416200</td>
        <td>12K</td>
        <td>9</td>
        <td>1k</td>
      </tr>
      <tr>
        <td>Youness</td>
        <td>Challab</td>
        <td>0699417291</td>
        <td>7,5K</td>
        <td>9</td>
        <td>781</td>
      </tr>
      <tr>
        
        <td><Link className="lien" to="/shart">Abdellah</Link></td>
        
        <td>Aitcheikh</td>
        <td>0645772987</td>
        <td>20K</td>
        <td>11</td>
        <td>265</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
    
    </>
}