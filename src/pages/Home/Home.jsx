import { DescriptionList } from "../../components/DescriptionList/DescriptionList";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Section } from "../../components/Section/Section";
import { Footer } from "../../components/Footer/Footer";
import { ApiData } from "../../serviceApi/ApiData";


export const Home = () => {
  return (
    <>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ApiData apiUrl="https://rickandmortyapi.com/api/character/" render={({ data, loading, error }) => (
          <>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>Error: {error.message}</p>
            ) : (
              <DescriptionList items={data} />
            )}
          </>
        )} 
        />
       
      </Section>
      
      <Footer />
    </>
  );
};
