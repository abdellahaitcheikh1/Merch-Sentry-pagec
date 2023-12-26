import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import imge from "../../Admin/IMG/nike-air-max-sneakers-shoe-air-jordan-men-shoes-45af4ec7176bad26683ab00a9e5623ca.png"
import "./panierPrecedent.css"
export default function PanierPrecedent(){
    return <>
    <SideBareMagasin/>
    <div className="container mt-3">

    <h3 id="h3">Vos panier Précédents</h3>
    <div className="mt-5">
    <div className="card mb-3">
        <div className="item">
    <h1 id="h1">spadre nike , ...</h1><br />
    <Link to="" id="voirPlus">Voire les details<i className="bi bi-arrow-right"></i> </Link>
        </div>
    <h5 className="mb-5" id="h5">Total : <b>150 MAD</b></h5>
        <Link className="recupere" to="">Récupérer</Link>
        <div className="image">
        <img src={imge} id="i1" alt="" />
        <img src={imge} id="i2" alt="" />
        <img src={imge} id="i3" alt="" />


        </div>
    </div>

    <div className="card mb-3">
        <div className="item">
    <h1 id="h1">spadre nike , ...</h1><br />
    <Link to="" id="voirPlus">Voire les details<i className="bi bi-arrow-right"></i> </Link>
        </div>
    <h5 className="mb-5" id="h5">Total : <b>150 MAD</b></h5>
        <Link className="recupere" to="">Récupérer</Link>
        <div className="image">
        <img src={imge} id="i1" alt="" />
        <img src={imge} id="i2" alt="" />
        <img src={imge} id="i3" alt="" />


        </div>
    </div>
    </div>
    </div>

    </>
}