import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Connexion from "../../Views/Register/Connexion";

export default function LoginService(){
  const [CompteEmail, setCompteEmail] = useState('');
  const navigate = useNavigate(); 

  const [Password, setPassword] = useState('');
  // const [messageEror, setMessageErors] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = 'http://127.0.0.1:8000/api/connexion'; 
    try {
      const response = await axios.post(url, { CompteEmail, Password }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      if (response.data === "magasin") {
        navigate(`/magasine`);
      } else if (response.data === "commercial") {
        navigate(`/commercial`);
      } else if (response.data === "dev") {
        console.log("dev");
      } else if (response.data === "comptoire") {
        console.log("comptoire");
      } else {
        navigate(`/`);

      }
    } catch (error) {
      console.error("error:", error);
    }
}
return <>
<Connexion 
handleSubmit={handleSubmit}
Password={Password}
setCompteEmail={setCompteEmail}
CompteEmail={CompteEmail}
setPassword={setPassword}
/>
</>
}
