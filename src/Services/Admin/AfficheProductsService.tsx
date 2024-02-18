import axios from "axios";

export default function AfficheProductsService(){
    const urlShowProduct = "http://127.0.0.1:8000/api/article";
   
    const getProduct=()=>{
        return (axios.get(urlShowProduct));
    }
    return {
        getProduct
    }
}