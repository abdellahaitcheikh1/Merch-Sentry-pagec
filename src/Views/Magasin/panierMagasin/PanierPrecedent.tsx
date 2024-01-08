import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import imge from "../../Admin/IMG/e1.png"
import imge1 from "../../Admin/IMG/3.png"
import imge2 from "../../Admin/IMG/e2.png"
import imge3 from "../../Admin/IMG/e3.png"


import "./panierPrecedent.css"
export default function PanierPrecedent(){
    return <>
    <SideBareMagasin/>
    <div className="container mt-3">

    <h3 id="h3">Vos paniers précédents</h3>
    <div className="mt-5">
    <div className="card mb-3">
        <div className="item">
    <h1 id="h1">I-FLUX, DPF FLUSH , ... </h1><br />
    <Link to="" id="voirPlus">Voir les détails<i className="bi bi-arrow-right"></i> </Link>
        </div>
    <h5 className="mb-5" id="h5">Total : <b>26 932 MAD</b></h5>
        <Link className="recupere" to="">Récupérer</Link>
        <div className="image">
        <img src={imge} id="i1" alt="" />
        <img src={imge1} id="i2" alt="" />
        <img src={imge3} id="i3" alt="" />


        </div>
    </div>

    <div className="card mb-3">
        <div className="item">
    <h1 id="h1">I-FLUX, DPF FLUSH , ...</h1><br />
    <Link to="" id="voirPlus">Voir les détails<i className="bi bi-arrow-right"></i> </Link>
        </div>
    <h5 className="mb-5" id="h5">Total : <b>26 932 MAD</b></h5>
        <Link className="recupere" to="">Récupérer</Link>
        <div className="image">
        <img src={imge1} id="i1" alt="" />
        <img src={imge2} id="i2" alt="" />
        <img src={imge} id="i3" alt="" />


        </div>
    </div>
    </div>
    </div>

    </>
}