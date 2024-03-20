import axios , {AxiosError} from "axios";
import { useParams } from "react-router-dom";
import AfficheProduit from "../../Views/Admin/HomeAdmin/AfficheProduit";
import { SetStateAction, useEffect, useState } from "react";

export default function AfficheProduitService(){
  const [Designation,setDesignation] = useState<string>("");
  const [IdArticle,setIdArticle] = useState<number>(0);
  const [PrixVenteArticleTTC,setPrixVenteArticleTTC] = useState<string>("");
  const [RefArticle,setRefArticle] = useState<string>("");
  const [image,setimage] = useState<any>("");
  const [Description,setDescription] = useState<string>("");
  const [stock,setstock] = useState<string>("");
  const [LibelleSubstitut,setLibelle] = useState<string>("")
  
    const {id}= useParams();    
    useEffect(()=>{
        fetchProduct();
    },[])
    const fetchProduct=async()=>{
        try {
          await axios.get(process.env.REACT_APP_PHP_APP_URL + '/articles/' + id)
          .then(({data})=>{
            data.forEach((items:any) => {
              if (Array.isArray(items)) {
                items.forEach((item) => {
                  if(item.LibelleSubstitut===""){
                    // console.log('fj')
                    setLibelle("N/A");
                  }else{
                    setLibelle(item.LibelleSubstitut);
                    
                  }
                });
              }else{
              setDesignation(items.Designation);
              setIdArticle(items.IdArticle);
              setDescription(items.Description);
              setimage(items.image);
              setPrixVenteArticleTTC(items.PrixVenteArticleTTC);
              setRefArticle(items.RefArticle);
              setstock(items.stock);
                
              }

          });
            

        })} catch (error: AxiosError | any) {
          if (error.response?.status === 442) {
          console.log("good data");

    
          } else {
            console.log("error");
          }
        }
          
      }
    return <>
        <AfficheProduit
        IdArticle={IdArticle}
        Designation={Designation}
        PrixVenteArticleTTC={PrixVenteArticleTTC}
        LibelleSubstitut={LibelleSubstitut}
        RefArticle={RefArticle}
        image={image}
        Description={Description}
        stock={stock}
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