export interface CommercialInfo{
    id?:number;
    nom:string;
    prenom:string;
    telephone:string;
    ville:string;
    email?:string;
    password?:string;
    MessageError:string,
    setMessageError:React.Dispatch<React.SetStateAction<string>>;
    setNom:React.Dispatch<React.SetStateAction<string>>;
    setPrénom:React.Dispatch<React.SetStateAction<string>>;
    setTélephone:React.Dispatch<React.SetStateAction<string>>;
    setVille:React.Dispatch<React.SetStateAction<string>>;
    handleSubmit?:(e: React.FormEvent<HTMLFormElement>) => Promise<void>;



}