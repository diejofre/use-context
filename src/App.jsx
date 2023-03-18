import "./App.css";
//import { UserContext } from "./contexts/UserContext";
// import ThemeStylesContext from "./contexts/ThemeStylesContext";
import Navbar from "./components/Navbar";
import User from "./components/User";
import Btn from "./components/Btn";
import { useContext } from "react";
import { UserContext } from "./contexts/UserContext";
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  //Contexto
  const value = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    // <div style={{
    //   backgroundColor: themeMode.background,
    //   color: themeMode.textColor
    // }}>
    // </div>
    // <div className={theme ? 'Container-dark' : 'Container-light'}>
    <div className={theme ? `containerDark` : `containerLight`}>
      <Navbar />
      <h5>Mi nombre es {value}</h5>
      <User />
      <Btn />
    </div>
  );
}

export default App;
