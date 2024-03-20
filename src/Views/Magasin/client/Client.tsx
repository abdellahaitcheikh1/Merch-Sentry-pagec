import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./client.css"
import { MagasinContext } from "../../../Context/MagasinContext";
import { useContext, useEffect, useState } from "react";
import { ClientInfo } from "../../../Modeles/Client";
import AfficheClient from "../../../Services/Magasin/AfficheClient";
export interface ProductType{

  product : ClientInfo[],
  messageErros:string,
}
export default function Client(){
  const magasinContext = useContext(MagasinContext);
    const [search , setSearche] = useState("");
    const MagasinId = localStorage.getItem('MagasinId');
      const id = MagasinId || magasinContext.id?.id;
    const [state , setState] = useState<ProductType>({
      product:[] as ClientInfo[],
      messageErros : "accune produit",
  
  })
  const handelSearche=(e:any)=>{
    setSearche(e.target.value);
  }
  useEffect(()=>{
      setState({...state })
     AfficheClient().GetClient()
          .then((res)=>setState({...state  , product:res.data})
          )
          .catch(msg=>setState({...state  , product:msg.messageErros}))
  },[]);
  const {product , messageErros} = state
  console.log(product);
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
          <Link to={`/magasins/${id}/clients/add`}><button id="ac" className="btnAjouteC">Ajouter un client</button></Link>
        </div>
      </div>
    </div>

    <div className="tableInfo">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col" className="ncom">Prénom</th>
        <th scope="col">Nom</th>
        <th scope="col">Email</th>
        <th scope="col">Mot de pass</th>
        <th scope="col">Ville</th>
        <th scope="col">Solde</th>


      </tr>
    </thead>
    <tbody>
    {product.length>0? product.map(pro=>(
      <tr>
        <td>{pro.PrenomClient}</td>
        <td>{pro.NomClient}</td>
        <td>{pro.EmailClient}</td>
        <td>{pro.PasswordClient}</td>
        <td>{pro.Ville}</td>
        <td>{pro.Credit} MAD</td>
      </tr>
        )):(<h5><i className="bi bi-info"></i>Accune Client  </h5>)
      }
      </tbody>
  </table>
</div>
    </div>
    </>
}