import { BrowserRouter, Routes , Route} from "react-router-dom"

import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Views/Admin/HomeAdmin/Home';

// import Sidebare from "./Views/Admin/Sidbare/Sidebare";
import Categories from "./Views/Admin/categories/Categories";
import Magasin from "./Views/Admin/magasin/Magasin";
import EditeMagasin from "./Views/Admin/magasin/EditeMagasin";
import CreateMagasin from "./Views/Admin/magasin/CreateMagasin";
import AfficheProduit from "./Views/Admin/HomeAdmin/AfficheProduit";
import AjouterProduit from "./Views/Admin/categories/AjouterProduit";
import Historique from "./Views/Admin/historique/Historique";
import { HomeMagasin } from "./Views/Magasin/HomeMagasin/HomeMagasin";
import Connexion from "./Views/Register/Connexion";
import AfficheProduitMagasin from "./Views/Magasin/HomeMagasin/AfficheProduitsMagasin";
import ProduitMagasin from "./Views/Magasin/HomeMagasin/ProduitMagasin";
import ChangeProduitMagasin from "./Views/Magasin/HomeMagasin/ChangeProduitMagasin";
import PanierMagasin from "./Views/Magasin/panierMagasin/PanierMagasin";
import Commercial from "./Views/Magasin/commercial/Commercial";
import AjouterCommercial from "./Views/Magasin/commercial/AjouterCommercial";
import HistoriqueMagasin from "./Views/Magasin/historique/HistoriqueMagasin";
import HistoriqueId from "./Views/Magasin/historique/HistoriqueId";
import AfficheCommercial from "./Views/Magasin/commercial/AfficheCommercial";
import NotificationMagasin from "./Views/Magasin/notification/NotificationMagasin";
import ConfirmeMessage from "./Views/Magasin/notification/ConfirmeMessage";
import Demande from "./Views/Magasin/HomeMagasin/Demande";
import Client from "./Views/Magasin/client/Client";
import AjouterClient from "./Views/Magasin/client/AjouterClient";
import AjouterProduitM from "./Views/Magasin/HomeMagasin/AjouterProduitM";
import Echanger from "./Views/Magasin/historique/Echanger";
import Remboureser from "./Views/Magasin/historique/Remboureser";
import PanierPrecedent from "./Views/Magasin/panierMagasin/PanierPrecedent";
import Encour from "./Views/Magasin/historique/Encour";
import HomeCommercial from "./Views/Commercial/Home/HomeCommercial";
import AfficheProduitCommercial from "./Views/Commercial/Produit/AfficheProduitCommercial";
import HomeVisiteur from "./Views/Utilisateure/visiteur/HomeVisiteur";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
    <Routes>
    <Route path='/' index element={<Home/>}/>
    <Route path='/categories' index element={<Categories/>}/>
    <Route path='/magasin' index element={<Magasin/>}/>
    <Route path='/magasin/edit' index element={<EditeMagasin/>}/>
    <Route path='/magasin/create' index element={<CreateMagasin/>}/>
    <Route path='/produit' index element={<AfficheProduit/>}/>
    <Route path='/ajouter-produit' index element={<AjouterProduit/>}/>
    <Route path='/historique' index element={<Historique/>}/>
    <Route path='/Magasine' index element={<HomeMagasin/>}/>
    <Route path='/afficheProduit' index element={<AfficheProduitMagasin/>}/>
    <Route path='/produits' index element={<ProduitMagasin/>}/>
    <Route path='/changeInfo' index element={<ChangeProduitMagasin/>}/>
    <Route path='/panier' index element={<PanierMagasin/>}/>
    <Route path='/magasin/commercial' index element={<Commercial/>}/>
    <Route path='/commercial/produit' index element={<AfficheProduitCommercial/>}/>

    <Route path='/ajouter-commercial' index element={<AjouterCommercial/>}/>
    <Route path='/shart' index element={<AfficheCommercial/>}/>
    <Route path='/magasin/notification' index element={<NotificationMagasin/>}/>
    <Route path='/magasin/notification/confirme' index element={<ConfirmeMessage/>}/>
    <Route path='/magasin/demande' index element={<Demande/>}/>
    <Route path='/magasin/client' index element={<Client/>}/>
    <Route path='/magasin/client/ajouter' index element={<AjouterClient/>}/>
    <Route path='/magasin/ajouter-produit' index element={<AjouterProduitM/>}/>
    <Route path='/panier/precedent' index element={<PanierPrecedent/>}/>
    <Route path='/visiteur' index element={<HomeVisiteur/>}/>










    <Route path='/magasin/historique' index element={<HistoriqueMagasin/>}/>
    <Route path='/commercial' index element={<HomeCommercial/>}/>

    <Route path='/magasin/historique/id' index element={<HistoriqueId/>}/>
    <Route path='/magasin/historique/encour/id' index element={<Encour/>}/>

    <Route path='/magasin/historique/id/echanger' index element={<Echanger/>}/>
    <Route path='/magasin/historique/id/rembourser' index element={<Remboureser/>}/>








    <Route path='/connexion' index element={<Connexion/>}/>






    </Routes>
    </BrowserRouter>
);