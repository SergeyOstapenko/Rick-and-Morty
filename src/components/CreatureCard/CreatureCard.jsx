import styles from "./CreatureCard.module.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Section } from "../Section/Section";
import { Hero } from "../Hero/Hero";
import { useParams } from "react-router-dom";
import { ApiData } from "../../serviceApi/ApiData";

export const CreatureCard = () => {
  const { id } = useParams();
  return (
    <>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ApiData
          apiUrl={`https://rickandmortyapi.com/api/character`}
          render={({ data, loading, error }) => {
            if (loading) {
              return <p>Loading...</p>;
            }

            if (error) {
              return <p>Error: {error.message}</p>;
            }

            if (!data || data.length === 0) {
              return <p>No data available.</p>;
            }

            const selectedCard = data.find(
              (creature) => creature.id === Number(id)
            );

            if (!selectedCard) {
              return <p>Creature not found.</p>;
            }

            return (
              <div className="container card">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.name}
                  width="595px"
                />
                <div className={styles.info}>
                  <h2 className={styles.title}>{selectedCard.name}</h2>
                  <p>Другие детали...</p>
                </div>
              </div>
            );
          }}
        />
      </Section>
      <Footer />
    </>
  );
};
