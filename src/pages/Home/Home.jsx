import { DescriptionList } from "../../components/DescriptionList/DescriptionList";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Section } from "../../components/Section/Section";
import { Footer } from "../../components/Footer/Footer";
import { ApiData } from "../../serviceApi/ApiData";
import {ThreeDots} from 'react-loader-spinner';

export const Home = () => {
  return (
    <>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ApiData
          apiUrl="https://rickandmortyapi.com/api/character/"
          render={({ data, loading, error }) => (
            <>
              {loading ? (
                <ThreeDots
                wrapperClass='wrapper'
                 visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                />
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
