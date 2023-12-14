import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import iconLogo from "/Vector.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.logo}>
        <img src={iconLogo} alt="logo" width={40} height={40}></img>
      </NavLink>
    </header>
  );
};
