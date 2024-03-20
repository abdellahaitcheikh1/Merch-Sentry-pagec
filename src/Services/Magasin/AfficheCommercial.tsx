import { useContext } from "react";
import { MagasinContext } from "../../Context/MagasinContext";
import axios from "axios";

export default function AfficheCommercial(){
    const MagasinId = localStorage.getItem('MagasinId');  
  
    const urlShowCommercial= `${process.env.REACT_APP_PHP_APP_URL}/magasins/${MagasinId}/commercials`;
    const GetCommercial=()=>{
        return (axios.get(urlShowCommercial));
    }
    return {
        GetCommercial
    }
}