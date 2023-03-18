// import { createContext, useContext, useState } from "react";

import { createContext } from "react"

// export const ThemeStylesContext = createContext();

// export const useThemeStylesContext = () => useContext(ThemeStylesContext);

// export const ThemeStylesContextProvider = (props) => {
  
//   const [theme, setTheme] = useState(false);

//   //crear funcion y exportarla para usarla donde se necesite cambiar el theme
//   const toggleTheme = () => {
//     //console.log("cambiaste el theme");
//     setTheme(!theme)
//     // theme === "dark" ? setTheme("light") : setTheme("dark");
//   };

  // const themeMode = {
  //   dark: {
  //     background: "#282c34",
  //     textColor: "white",
  //   },
  //   light: {
  //     background: "white",
  //     textColor: "#282c34",
  //   },
  // };
  // aca toda la funcionalidad, como estados, useEffect, metodos de Array, Y TODA LA LOGICA
  // if (theme === false) {
  //   setTheme(dark);
  // }

  // const context = {
  //   nombre: "vane contexto de theme",
  //   theme,
  //   toggleTheme,
  // };

//   return (
//       <ThemeStylesContext.Provider value={{theme, toggleTheme}}>
//         {props.children}
//       </ThemeStylesContext.Provider>
//   )
// }

// export default ThemeStylesContext;

export const ThemeStylesContext = createContext();
