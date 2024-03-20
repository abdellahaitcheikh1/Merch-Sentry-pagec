import { useContext } from "react";
import { MagasinContext } from "../../Context/MagasinContext";
import axios from "axios";

export default function AfficheArticleInMagasin(){
    const MagasinId = localStorage.getItem('MagasinId');  
  
    const urlShowArticle = `${process.env.REACT_APP_PHP_APP_URL}/magasins/${MagasinId}/articles`;
    const getArticle=()=>{
        return (axios.get(urlShowArticle));
    }
    return {
        getArticle
    }
}