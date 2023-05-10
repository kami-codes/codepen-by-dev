import { createContext, useState } from "react";

export const DatatContext = createContext();


const DataProvider = ({children})=>{

    
const [html, setHtml] = useState('')
const [css, setCss] = useState('')
const [js, setJs] = useState('')

    return(
        <DatatContext.Provider value={
            {
                html, setHtml, css, setCss, js, setJs
            }
        }>
            {children}
        </DatatContext.Provider>
    )
}
export default DataProvider