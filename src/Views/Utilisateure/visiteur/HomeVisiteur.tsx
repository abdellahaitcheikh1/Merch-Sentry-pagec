import "./Homevisiteur.css"
export  default function HomeVisiteur(){
    return <>
        <div className="titleApp">MerchSentry</div>
        <div className="row height">
            <div className="col-md-6">
                <div className="form ">
                <i className="fa fa-search" />
                <input type="text" className="form-control form-input" placeholder="Recherch un produit , ref .." />
                <span className="left-pan"><i className="bi bi-sliders"></i></span>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="categorie"></div>
            <div className="produit"></div>
        </div>
            <div className="magasins"></div>
    </>
}