import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";


export const useActivity = ()=>{
    const context = useContext(ActivityContext)
    if(!context){
        throw new Error ('this hook Must be used in activity provider ')
    }

    return context
}