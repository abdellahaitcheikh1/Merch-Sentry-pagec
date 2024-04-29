export interface ClientInfo{
    id?:number;
    NomClient:string;
    PrenomClient:string;
    NumTele:string;
    Ville:string;
    EmailClient?:string;
    Credit?:string;
    PasswordClient?:string;
    MessageError:string,
    ICE:string,
    setMessageError:React.Dispatch<React.SetStateAction<string>>;
    setICE:React.Dispatch<React.SetStateAction<string>>;
    setNomClient:React.Dispatch<React.SetStateAction<string>>;
    setPrenomClient:React.Dispatch<React.SetStateAction<string>>;
    setNumTele:React.Dispatch<React.SetStateAction<string>>;
    setCredit:React.Dispatch<React.SetStateAction<string>>;
    setVille:React.Dispatch<React.SetStateAction<string>>;
    handleSubmit?:(e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}