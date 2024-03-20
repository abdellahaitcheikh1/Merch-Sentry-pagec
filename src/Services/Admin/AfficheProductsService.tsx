import axios from "axios";
import { useState } from "react";
import { ArticleInfo } from "../../Modeles/ArticleModel";

export default function AfficheProductsService(){
    const urlShowProduct = `${process.env.REACT_APP_PHP_APP_URL}/articles`;
    
    const getProduct=()=>{
        return (axios.get(urlShowProduct));
    }
    return {
        getProduct
    }
}

// export const getProduct=async () : Promise<any>=>{
//     const urlShowProduct = `${process.env.REACT_APP_PHP_APP_URL}/article`;
//     return await axios.get<Array<ArticleInfo>>(urlShowProduct);
// }