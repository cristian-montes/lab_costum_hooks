import { Children } from "react";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const DarkMode = ( {children}) =>{
    const [isDarkMode, setDarkMode] = useState('');

    const themeStyles =  {
       dark: {
           background: '#333',
           color:'#CCC'
       },
       light: {
        background: '#CCC',
        color:'#333'
        },

    
    }
    const [themes] = useState(themeStyles);
   

    return(
        <ThemeContext.Provider value={{ isDarkMode, setDarkMode, themes}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const ThemeContextState = () => {
    return useContext(ThemeContext);
}


export default DarkMode;







