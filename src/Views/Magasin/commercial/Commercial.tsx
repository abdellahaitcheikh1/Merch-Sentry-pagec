import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./commercial.css"
import "./commercialQuery.css"
import { MagasinContext } from "../../../Context/MagasinContext";
import { useContext, useEffect, useState } from "react";
import { CommercialInfo } from "../../../Modeles/Commercial";
import AfficheCommercial from "../../../Services/Magasin/AfficheCommercial";
export interface ProductType{

  product : CommercialInfo[],
  messageErros:string,
}
export default function Commercial(){
  const magasinContext = useContext(MagasinContext);
    const [search , setSearche] = useState("");
    const MagasinId = localStorage.getItem('MagasinId');
      const id = MagasinId || magasinContext.id?.id;
    const [state , setState] = useState<ProductType>({
      product:[] as CommercialInfo[],
      messageErros : "accune produit",
  
  })
  const handelSearche=(e:any)=>{
    setSearche(e.target.value);
  }
  useEffect(()=>{
      setState({...state })
      AfficheCommercial().GetCommercial()
          .then((res)=>setState({...state  , product:res.data})
          )
          .catch(msg=>setState({...state  , product:msg.messageErros}))
  },[]);
  const {product , messageErros} = state
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
          <Link to={`/magasins/${id}/commercials/add`}><button className="btnAjouteC">Ajouter un Commercial</button></Link>
        </div>
      </div>
    </div>

    <div className="tableInfos">
  <table className="table table-bordered">
    <thead>
    <tr>
        <th scope="col" className="ncom">Prénom</th>
        <th scope="col">Nom</th>
        <th scope="col">Email</th>
        <th scope="col">mod de pass</th>
        <th scope="col">Vendu</th>
        <th scope="col">En cours</th>
        <th scope="col">Annulé</th>
    </tr>
    </thead>
    <tbody>
    {product.length>0? product.map(pro=>( 
      <tr>
        <td><Link className="lien" to={`/magasins/${id}/commercials/id/shart`}>{pro.prenom}</Link></td>
                <td>{pro.nom}</td>
        <td>{pro.email}</td>
        <td>{pro.password}</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
        )):(<h5><i className="bi bi-info"></i>Accune Commercial  </h5>)
      }
    </tbody>
  </table>
</div>
    </div>
    
    </>
}