import { Link } from "react-router-dom";
import SideBareMagasin from "../SideBareMagasin/SideBareMagasin";
import "./notification.css"
export default function NotificationMagasin(){
    return <>
        <SideBareMagasin/>
        <div className="container">
            <h2 className="mt-5 mb-5">Notifications</h2>
            <Link className="derection" to="/magasins/:id/notifications/:id/confirme">
                <h5>Aujourd'hui</h5>
            <div className="card mb-5">
                <span>5/12/2023</span>
                <div className="message">
                <p>
                    Confirmé nous que vous avez été remboursé avec succés pour l'article "Nike"
                </p>
                <i className="bi bi-arrow-up-right-circle-fill"></i>
                </div>
                <div className="icon">
                </div>
            </div>
            </Link>
            <Link className="derection" to="">
                <h5>Cette semaine</h5>
            <div className="card">
                <span>1/12/2023</span>
                <div className="message">
                <p>
                    Confirmé nous que vous avez été remboursé avec succés pour l'article "Nike"
                </p>
                <i className="bi bi-arrow-up-right-circle-fill"></i>
                </div>
                <div className="icon">
                </div>
            </div>
            </Link>
        </div>
    </>
}