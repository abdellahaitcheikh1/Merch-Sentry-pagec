import "./Homevisiteur.css"
export default function AfficheProduitVisiteur(){
    return <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <div className="title-app">MERCHSENTRY<br />
        <svg className="underline-title" width="149" height="5" viewBox="0 0 149 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.91077 0.821324C0.919613 0.821324 0.116124 1.62481 0.116124 2.61597C0.116124 3.60712 0.919613 4.41061 1.91077 4.41061V0.821324ZM146.679 4.41061H148.473V0.821324H146.679V4.41061ZM1.91077 4.41061H146.679V0.821324H1.91077V4.41061Z" fill="#D4B996"/>
</svg> 
</div>
<div className="product-content">
    <div className="bar-roteur">
        <h3>CASSETTE 8 VITESSES 12X32</h3>
    </div>
    <div className="info-products">
        <div className="image-product">

        <img src="" alt="" />
        </div>
        <div className="info-product">
            <h3>239 MAD</h3>
            <p>Quantité</p>
            <input type="number" />
            <p>160 rue Guillaume du Vair, 13290 Aix en Provence, cedex 4</p>
            <img src="" alt="" />
        </div>
        <div className="commande">
            <img src="" alt="" />
            <button>Commandez via WhatsApp</button>
        </div>
    </div>
</div>
    </>
}