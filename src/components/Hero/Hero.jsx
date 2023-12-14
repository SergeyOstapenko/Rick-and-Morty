import styles from "./Hero.module.scss";
import iconHero from "/SVG.png";

export const Hero = () => {
  return (
    <>
      <div className="container hero">
        {/* <img src={iconHero} alt="iconHero" className={styles.iconHero}></img> */}
         <h1 className={styles.title}>The Rick and Morty API</h1>
         
      </div>
    </>
  );
};
