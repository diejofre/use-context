import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import styles from "./user.module.css";

const User = () => {
  const value = useContext(UserContext);

  return <h1 className={styles.titulo}>{value}</h1>;
};

export default User;
