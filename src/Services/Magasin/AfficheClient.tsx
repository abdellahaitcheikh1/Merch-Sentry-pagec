import { useContext } from "react";
import { MagasinContext } from "../../Context/MagasinContext";
import axios from "axios";

export default function AfficheClient(){
    const MagasinId = localStorage.getItem('MagasinId');  
  
    const urlShowClientl= `${process.env.REACT_APP_PHP_APP_URL}/magasins/${MagasinId}/clients`;
    const GetClient=()=>{
        return (axios.get(urlShowClientl));
    }
    return {
        GetClient
    }
}