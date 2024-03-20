import axios, { AxiosError } from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AjouterProduit from "../../Views/Admin/categories/AjouterProduit";
import AjouterCommercial from "../../Views/Magasin/commercial/AjouterCommercial";

export default function AddCommercialMagasin(){
    const navigate = useNavigate();
    const [Nom, setNom] = useState<string>("");
    const [Prénom, setPrénom] = useState<string>("");
    const [Télephone, setTélephone] = useState<string>("");
    const [Ville, setVille] = useState<string>("");
    const [MessageError, setMessageError] = useState<string>("");

    const MagasinId = localStorage.getItem('MagasinId');  



  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nom", Nom);
    formData.append("prenom", Prénom);
    formData.append("télephone", Télephone);
    formData.append("ville", Ville);
    try {
      await axios.post(`${process.env.REACT_APP_PHP_APP_URL}/magasins/${MagasinId}/commercial/add`, formData)
      .then(({data})=>{
        navigate("/message/commercial")
          const timeoutId = setTimeout(() => {
            navigate(`/magasins/${MagasinId}/commercials`);
          }, 2000);
      });
    } catch (error: AxiosError | any) {
        setMessageError('Veuillez saisir toutes les informations : "nome" et "prenom" obligatoire')
        const timeoutId = setTimeout(() => {
        setMessageError('')
        }, 3000);

      } 
      
    }
  return <>
  <AjouterCommercial
  nom={Nom}
  prenom={Prénom}
  telephone={Télephone}
  ville={Ville}
  setPrénom={setPrénom}
  setNom={setNom}
  setTélephone={setTélephone}
  setVille={setVille}
  handleSubmit={handleSubmit}
  MessageError={MessageError}
  setMessageError={setMessageError}

  />
  </>
}