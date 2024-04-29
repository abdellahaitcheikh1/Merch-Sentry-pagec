import { createContext, useState } from "react"
type contextType={
    children :React.ReactNode
}
type MagasinType={
    id:number,
    image:string,
    name:string,
    email:string, 
}
type MagasinContextType={
    id:any , 
    setId:any,
    image:any , 
    setImage:any,
    nameMagasin:any,
    setNameMagasin:any,
    email:any, 
    setEmail:any,
}
export const MagasinContext = createContext({} as MagasinContextType);

export const  UserContextProvider = ({children}:contextType)=>{
    const [id , setId] = useState<MagasinType | null>(null);
    const [image , setImage] = useState<MagasinType | null>(null);
    const [nameMagasin , setNameMagasin] = useState<MagasinType | null>(null);
    const [email , setEmail] = useState<MagasinType | null>(null);


    return(

        <MagasinContext.Provider value={{id , setId , image , setImage , email , setEmail , nameMagasin , setNameMagasin}}>{children}</MagasinContext.Provider>
    )
}