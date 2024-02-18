export interface Utilisateure{
    CompteEmail:string,
    setCompteEmail: React.Dispatch<React.SetStateAction<string>>;
    Password:string,
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    messageError?:boolean,
    setMessageErors?: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit?: (e: React.FormEvent) => Promise<void>;


}