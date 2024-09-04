import { NavLink } from "react-router-dom";
import fullLogo from "../assets/fullLogo.png";
import styles from "../styles/SideNav.module.css";

function SideNav() {
  return (
    <header>
      <nav>
        <div className={styles.navContainer}>
          <img src={fullLogo} alt="logo" />
          <NavLink className={styles.navItem} path="/">Inventory</NavLink>
        </div>
        <div className={styles.logout}>Log Out</div>
      </nav>
    </header>
  );
}

export default SideNav;
