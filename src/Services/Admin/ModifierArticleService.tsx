import { useParams } from "react-router-dom";
import ModifierProduit from "../../Views/Admin/HomeAdmin/ModifierProduit";
import { SetStateAction, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

export default function ModifierArticleService(){
    const [Designation,setDesignation] = useState<string>("");
//   const [IdArticle,setIdArticle] = useState<number>(0);
  const [PrixVenteArticleTTC,setPrixVenteArticleTTC] = useState<string>("");
  const [RefArticle,setRefArticle] = useState<string>("");
  const [image,setimage] = useState<any>("");
  const [Description,setDescription] = useState<string>("");
  const [stock,setstock] = useState<string>("");


    const {id}= useParams();    
    useEffect(()=>{
        fetchProduct();
    },[])
    const fetchProduct=async()=>{
        try {
          await axios.get(`http://127.0.0.1:8000/api/article/${id}/modifier`)
          .then(({data})=>{
            setDesignation(data.Designation);
            // setIdArticle(data.IdArticle);
            setDescription(data.Description);
            setimage(data.image);
            setPrixVenteArticleTTC(data.PrixVenteArticleTTC);
            setRefArticle(data.RefArticle);
            setstock(data.stock);

        })} catch (error: AxiosError | any) {
          if (error.response?.status === 442) {
          console.log("good data");
    
          } else {
            console.log("error");
          }
        }
          
      }
    return<>
    <ModifierProduit
            Designation={Designation}
            PrixVenteArticleTTC={PrixVenteArticleTTC}
            RefArticle={RefArticle}
            image={image}
            Description={Description}
            stock={stock} Unite={""} setDesignation={function (value: SetStateAction<string>): void {
                throw new Error("Function not implemented.");
            } } setPrixVenteArticleTTC={function (value: SetStateAction<string>): void {
                throw new Error("Function not implemented.");
            } } setDescription={function (value: SetStateAction<string>): void {
                throw new Error("Function not implemented.");
            } } setImage={function (value: SetStateAction<File | null>): void {
                throw new Error("Function not implemented.");
            } } setstock={function (value: SetStateAction<string>): void {
                throw new Error("Function not implemented.");
            } } setRefARticle={function (value: SetStateAction<string>): void {
                throw new Error("Function not implemented.");
            } } setUnite={function (value: SetStateAction<string>): void {
                throw new Error("Function not implemented.");
            } }    />
    </>
}