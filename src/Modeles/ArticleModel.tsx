export interface ArticleInfo {
    IdArticle?:number
    Designation: string;
    PrixVenteArticleTTC: string;
    Description: string;
    image: File | null;
    created_at?:number,
    stock:string;
    RefArticle:string;
    Unite:string,
    updated_at?:number,
    messageError?:string
    setDesignation:React.Dispatch<React.SetStateAction<string>>;
    setPrixVenteArticleTTC:React.Dispatch<React.SetStateAction<string>>;
    setDescription:React.Dispatch<React.SetStateAction<string>>;
    setImage:React.Dispatch<React.SetStateAction<File | null>>;
    handleSubmit?:(e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    handleImage?:(e: React.ChangeEvent<HTMLInputElement>) => void;
    setstock:React.Dispatch<React.SetStateAction<string>>
    setRefARticle:React.Dispatch<React.SetStateAction<string>>
    setUnite:React.Dispatch<React.SetStateAction<string>>


    
}
