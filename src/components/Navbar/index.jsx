import styles from "./navbar.module.css"

const Navbar = () => {

  return (
    <nav className={styles.navegacion}>
      <ul className={styles.menu}>
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Productos</li>
        <li>Contacto</li>
        {/* <DarkMode onClick={toggleTheme}/> */}
      </ul>
    </nav>
  );
}

export default Navbar;
