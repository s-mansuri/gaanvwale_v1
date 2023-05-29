import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import MainContent from "./components/MainContent/MainContent";
import MainFooter from "./components/MainFooter/MainFooter";
import About from "./components/MenuItems/About";
import Contact from "./components/MenuItems/Contact";
import { Route, Routes } from "react-router-dom";
import ChaiMenu from "./components/MainContent/ChaiMenu";
import BurgerMenu from "./components/MainContent/BurgerMenu";
import MasaleMenu from "./components/MainContent/MasaleMenu";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainHeader />
              <MainContent />
              <MainFooter />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/chaiMenu" element={<ChaiMenu />} />
        <Route path="/BurgerMenu" element={<BurgerMenu />} />
        <Route path="/MasaleMenu" element={<MasaleMenu />} />
      </Routes>
    </div>
  );
}

export default App;
