import axios, { AxiosError } from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import AjouterProduit from "../../Views/Admin/categories/AjouterProduit";
import AjouterCommercial from "../../Views/Magasin/commercial/AjouterCommercial";
import AjouterClient from "../../Views/Magasin/client/AjouterClient";

export default function AddClient(){
    const navigate = useNavigate();
    const [NomClient, setNomClient] = useState<string>("");
    const [PrenomClient, setPrenomClient] = useState<string>("");
    const [NumTele, setNumTele] = useState<string>("");
    const [Credit, setCredit] = useState<string>("");
    const [Ville, setVille] = useState<string>("");
    const [ICE, setICE] = useState<string>("");

    const [MessageError, setMessageError] = useState<string>("");

    const MagasinId = localStorage.getItem('MagasinId');  



  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("NomClient", NomClient);
    formData.append("PrenomClient", PrenomClient);
    formData.append("NumTele", NumTele);
    formData.append("Ville", Ville);
    formData.append("Credit", Credit);
    formData.append("ICE", ICE);

    try {
      await axios.post(`${process.env.REACT_APP_PHP_APP_URL}/magasins/${MagasinId}/client/add`, formData)
      .then(({data})=>{
        navigate("/message/client")
          const timeoutId = setTimeout(() => {
            navigate(`/magasins/${MagasinId}/clients`);
          }, 3000);
      });
    } catch (error: AxiosError | any) {
        setMessageError('Veuillez saisir toutes les informations : "Nom" et "Prénom" obligatoire "ICE" doit contenir 6 chiffres ')
        const timeoutId = setTimeout(() => {
        setMessageError('')
        }, 4000);

      } 
      
    }
  return <>
  <AjouterClient
  NomClient={NomClient}
  PrenomClient={PrenomClient}
  NumTele={NumTele}
  Ville={Ville}
  Credit={Credit}
  ICE={ICE}
  setPrenomClient={setPrenomClient}
  setCredit={setCredit}
  setNomClient={setNomClient}
  setNumTele={setNumTele}
  setVille={setVille}
  setICE={setICE}
  handleSubmit={handleSubmit}
  MessageError={MessageError}
  setMessageError={setMessageError}

  />
  </>
}