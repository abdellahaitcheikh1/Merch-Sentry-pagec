import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Connexion from "../../Views/Register/Connexion";
import { MagasinContext } from "../../Context/MagasinContext";

export default function LoginService(){
  const [CompteEmail, setCompteEmail] = useState('');
  const [message, setMessage] = useState(false);

  const navigate = useNavigate(); 
  const magasinContext = useContext(MagasinContext);

  const [Password, setPassword] = useState('');
  // const [messageEror, setMessageErors] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_PHP_APP_URL}/connexion`; 
    try {
      const response = await axios.post(url, { CompteEmail, Password }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
        
      if (response.data.message === "magasin") {
        const IdMagasin = response.data.account.id;
        const NameMagasin = response.data.account.NomMagasin;

        navigate(`/magasins/`+IdMagasin);
        const savedId = localStorage.getItem('MagasinId');
        localStorage.setItem('MagasinId', savedId || IdMagasin);

        const savedNameMagasin = localStorage.getItem('MagasinName');
        localStorage.setItem('MagasinName', savedNameMagasin || NameMagasin);
        magasinContext.setId({
          id:savedId || IdMagasin,
        });
        magasinContext.setNameMagasin({
          nameMagasin:savedNameMagasin || NameMagasin,
        });
      } else if (response.data.message === "commercial") {
        navigate(`/commercials/:id`);
      }else if (response.data === "superAdmin") {
        navigate(`/home`);
      } 
      else if (response.data === "dev") {
        console.log("dev");
      } else if (response.data === "comptoire") {
        console.log("comptoire");
      } else {
        setMessage(true);
        const timeoutId = setTimeout(() => {
          setMessage(false)
          }, 3000);

      }
    } catch (error) {
      console.error("error:", error);
    }
}
return(
<>

<Connexion 
handleSubmit={handleSubmit}
Password={Password}
setCompteEmail={setCompteEmail}
CompteEmail={CompteEmail}
setPassword={setPassword}
message={message}
/>
</>
)
}
