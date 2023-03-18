//import { Button } from "@mui/material";
//import { useContext } from "react";
// import ThemeStylesContext from "../../contexts/ThemeStylesContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";
import styles from "./button.module.css";

const Btn = () => {
  const { toggleTheme } = useContext(ThemeContext);

  //Estado
  // const {theme, toogleTheme} = useContext(ThemeStylesContext);
  // //Función evento
  // const handleClick = () =>{
  //   toogleTheme();
  // }

  return (
    <div className={styles.flexBtn}>
      {/* <Button
        className={`${theme ? styles.btnDark : styles.btnLight}`}
        onClick={handleClick}
      >
        {theme ? "Cambiar al modo claro" : "Cambiar al modo oscuro"}
        Cambiar modo
      </Button> */}
      <button onClick={toggleTheme}>Cambiar</button>
    </div>
  );
};

export default Btn;
