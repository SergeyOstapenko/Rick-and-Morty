import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { CreatureCard } from "./components/CreatureCard/CreatureCard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/creature/:id" element={<CreatureCard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
