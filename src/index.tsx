import * as React from 'react';
import {HashRouter, Routes , Route, BrowserRouter} from "react-router-dom"
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css';
import Home from './Views/Admin/HomeAdmin/Home';
import App from './App';

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
import AfficheProduitVisiteur from "./Views/Utilisateure/visiteur/AfficheProduitVisiteur";
import AddArticleService from "./Services/Admin/AddArticleService";
import MessageSuccess from "./Views/Admin/message/MessageSuccess";
import AfficheProduitService from "./Services/Admin/AfficheProduitService";
import ModifierProduit from "./Views/Admin/HomeAdmin/ModifierProduit";
import ModifierArticleService from "./Services/Admin/ModifierArticleService";
import AvisClient from "./Views/Utilisateure/visiteur/AvisClient";
import LoginService from "./Services/Authentication/LoginService";
import HomeClient from "./Views/Utilisateure/client/HomeClient";
import AfficheArticleById from "./Services/Magasin/AfficheArticleById";
import AddCommercialMagasin from "./Services/Magasin/AddCommercialMagasin";
import MessageAddCommercial from "./Views/Admin/message/MessageAddCommercial";
import AddClient from "./Services/Magasin/AddClient";
import MessageAddClient from "./Views/Admin/message/MessagAddClient";
import AddArticle from "./Services/Magasin/AddArticle";
import MessageAddArticleInMagasin from "./Views/Admin/message/MessageAddArticleInMagasin";
import {HomeMagasinQuepic} from "./Views/Magasin/HomeMagasin/HomeMagasinQuepic";
import HistoriqueCommercial from './Views/Commercial/Historique/HistoriqueCommercial';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

      
    <BrowserRouter>
    <Routes>
          {/* -------------------------------- routes authentification -----------------------------*/}
    <Route path='/' index element={<LoginService/>}/>

          {/* -------------------------------- routes admin -----------------------------*/}


    <Route path='/home' index element={<Home/>}/>
    <Route path='/articles/:id' element={<AfficheProduitService/>}/>
    <Route path='/articles/:id/edit' element={<ModifierArticleService/>}/>
    <Route path='/articles/categories' index element={<Categories/>}/>
    <Route path='/articles/categories/add' index element={<AddArticleService/>}/>
    <Route path='/magasin' index element={<Magasin/>}/> 
    <Route path='/magasin/add' index element={<CreateMagasin/>}/>
    <Route path='/magasin/:id/edit' index element={<EditeMagasin/>}/>
    <Route path='/historiques' index element={<Historique/>}/>
     <Route path='/magasinsQ/:id' index element={<HomeMagasinQuepic/>}/> 

    {/* -------------------------------- routes magasin -----------------------------*/}

    <Route path='/magasins/:id' index element={<HomeMagasin/>}/>
    <Route path='/magasins/:id/articles/:id' index element={<AfficheArticleById/>}/>
    <Route path='/magasins/:id/articles' index element={<ProduitMagasin/>}/>
    <Route path='/magasins/:id/article/:id/edit' index element={<ChangeProduitMagasin/>}/>
    <Route path='/magasins/:id/panier' index element={<PanierMagasin/>}/>
    <Route path='/magasins/:id/commercials' index element={<Commercial/>}/>
    <Route path='/magasins/:id/commercials/add' index element={<AddCommercialMagasin/>}/>
    <Route path='/magasins/:id/commercials/:id/shart' index element={<AfficheCommercial/>}/>
    <Route path='/magasins/:id/notifications' index element={<NotificationMagasin/>}/>
    <Route path='/magasins/:id/notifications/:id/confirme' index element={<ConfirmeMessage/>}/>
    <Route path='/magasins/:id/demande' index element={<Demande/>}/>
    <Route path='/magasins/:id/clients' index element={<Client/>}/>
    <Route path='/magasins/:id/clients/add' index element={<AddClient/>}/>
    <Route path='/magasins/:id/articles/add' index element={<AddArticle/>}/>
    <Route path='/magasins/:id/panier/precedent' index element={<PanierPrecedent/>}/>
    <Route path='/message' index element={<MessageSuccess/>}/>
    <Route path='/message/article' index element={<MessageAddArticleInMagasin/>}/>
    <Route path='/message/commercial' index element={<MessageAddCommercial/>}/>
    <Route path='/message/client' index element={<MessageAddClient/>}/>
    <Route path='/magasins/:id/historiques' index element={<HistoriqueMagasin/>}/>
    <Route path='/magasins/:id/historiques/id' index element={<HistoriqueId/>}/>
    <Route path='/magasins/:id/historiques/encour/id' index element={<Encour/>}/>
    <Route path='/magasins/:id/historiques/id/echanger' index element={<Echanger/>}/>
    <Route path='/magasins/:id/historiques/id/rembourser' index element={<Remboureser/>}/>

    {/* -------------------------------- routes Commercial -----------------------------*/}

    <Route path='/commercials/:id' index element={<HomeCommercial/>}/>
    <Route path='/commercials/:id/articles' index element={<AfficheProduitCommercial/>}/>
    <Route path='/commercials/historique' index element={<HistoriqueCommercial/>}/>


    {/* -------------------------------- routes Visiteur -----------------------------*/}

    <Route path='/visiteurs' index element={<HomeVisiteur/>}/>
    <Route path='/visiteurs/articles' index element={<AfficheProduitVisiteur/>}/>
    <Route path='/avis/clients' element={<AvisClient/>}/>

    {/* -------------------------------- routes Client -----------------------------*/}

    <Route path='/clients/:id' index element={<HomeClient/>}/>

    </Routes>
    </BrowserRouter>
);