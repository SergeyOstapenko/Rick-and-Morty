import { NavLink, Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import Logo from "/logo.png";
import iconGithub from '/github.svg';
import iconTwitter from '/twitter.svg';
import iconHeart from '/heart.svg';


export const Footer = () => {
  return (
    <div className="container footer">
      <h2 className={styles.title}>
        performed as part of a test case for the company
      </h2>
      <NavLink className={styles.logo}>
        <img className={styles.img_logo} src={Logo} alt="logo" />
      </NavLink>
      <div className={styles.container_social}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link><img src={iconGithub} alt="github" /></Link>
          </li>
          <li className={styles.item}>
            <Link><img src={iconTwitter} alt="twitter" /></Link>
          </li>
          <li className={styles.item}>
            <Link><img src={iconHeart} alt="heart" /></Link>
          </li>
        </ul>
      </div>
      <p className={styles.text}>2023</p>
    </div>
  );
};
