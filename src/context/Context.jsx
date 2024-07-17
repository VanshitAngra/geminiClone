import { createContext } from "react";
import runChat from "../config/gemini";

export const Context=createContext();
const ContextProvider=(props)=>{

    const onSet=async(prompt)=>{
        await runChat(prompt)
    }

    onSet("What is react js");
    const contextValue={

    }
    return(
        <Context.Provider value={contextValue}>

        </Context.Provider>
    )
} 
export default ContextProvider