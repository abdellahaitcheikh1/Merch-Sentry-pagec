import { SetStateAction, useContext, useEffect, useState } from "react";
import { MagasinContext } from "../../Context/MagasinContext";
import axios, { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import AfficheProduitMagasin from "../../Views/Magasin/HomeMagasin/AfficheProduitsMagasin";

export default function AfficheArticleById(){
    const [Designation,setDesignation] = useState<string>("");
    const [IdArticle,setIdArticle] = useState<number>(0);
    const [PrixVenteArticleTTC,setPrixVenteArticleTTC] = useState<string>("");
    const [RefArticle,setRefArticle] = useState<string>("");
    const [image,setimage] = useState<any>("");
    const [Description,setDescription] = useState<string>("");
    const [quantité,setQuantité] = useState<number>(0);
    const [LibelleSubstitut,setLibelle] = useState<string>("")
    const MagasinId = localStorage.getItem('MagasinId');  
    const {id}= useParams();    
    useEffect(()=>{
        fetchProduct();
    },[])
    const fetchProduct=async()=>{
      const url =`http://127.0.0.1:8000/api/magasins/1/articles/${IdArticle}` ;
        try {
          await axios.get(url)
          .then(({data}:any)=>{
            console.log("ici")
            console.log(data)
            data.map((article:any)=>{

                        
            })

        })} catch (error: AxiosError | any) {
          if (error.response?.status === 442) {
          console.log("good data");

    
          } else {
            console.log("error");
          }
        }
          
      }
      return<>
<AfficheProduitMagasin
          IdArticle={IdArticle}
          Designation={Designation}
          PrixVenteArticleTTC={PrixVenteArticleTTC}
          LibelleSubstitut={LibelleSubstitut}
          RefArticle={RefArticle}
          image={image}
          Description={Description}
          quantité={quantité}
          Unite={""} setDesignation={function (value: SetStateAction<string>): void {
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
          } } setQuantité={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          } } setprix_ht_2_magasin={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          } } setprix_ht_3_magasin={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          } } setprix_ttc_magasin={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          } } setquantité={function (value: SetStateAction<string>): void {
            throw new Error("Function not implemented.");
          } }        />
</>
}