import { DescriptionList } from "../../components/DescriptionList/DescriptionList";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { Section } from "../../components/Section/Section";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Section>
        <Hero />
      </Section>
      <Section>
        <DescriptionList />
      </Section>

      <Footer />
    </>
  );
};
