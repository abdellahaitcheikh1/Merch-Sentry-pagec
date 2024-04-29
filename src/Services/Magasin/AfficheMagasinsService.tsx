import axios from "axios";

export default function AfficheMagasinsService(){
    const urlShowMagasins = `${process.env.REACT_APP_PHP_APP_URL}/magasins`;
    const getMagasin=()=>{
        return (axios.get(urlShowMagasins));
    }

    const getArticleById = (id: number) => {
        return axios.get(`${process.env.REACT_APP_PHP_APP_URL}/articles/${id}`);
    }

    return {
        getMagasin,
        getArticleById
    }
}