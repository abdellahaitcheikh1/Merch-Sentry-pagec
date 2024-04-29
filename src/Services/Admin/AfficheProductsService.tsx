// Services/Admin/AfficheProductsService.tsx
// Services/Admin/AfficheProductsService.tsx
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function AfficheProductsService() {
    const urlShowProduct = `${process.env.REACT_APP_PHP_APP_URL}/articles`;

    const getProduct = () => {
        return axios.get(urlShowProduct);
    };


    const getArticleById = (IdArticle: number) => {
        return axios.get(`http://127.0.0.1:8000/api/magasins/id/articles/${IdArticle}`);
    }
    

    return {
        getProduct,
        getArticleById
    };
}


// export const getProduct=async () : Promise<any>=>{
//     const urlShowProduct = `${process.env.REACT_APP_PHP_APP_URL}/article`;
//     return await axios.get<Array<ArticleInfo>>(urlShowProduct);
// }