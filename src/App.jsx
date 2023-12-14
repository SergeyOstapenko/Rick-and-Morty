import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
