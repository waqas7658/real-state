import "./App.css";

import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStared/GetStarted";

import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Values from "./components/Values/Values";
// import { Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";

function App() {
  return (
    <>
      {/* <Routes> */}
      {/* <Route path="/" element={<Header />} /> */}
      {/* <Route index element={<Hero />} />
        <Route path="/residencies" element={<Residencies />} />
        <Route path="/values" element={<Values />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/getstarted" element={<GetStarted />} />
        <Route path="/footer" element={<Footer />} />
      </Routes> */}

      <Hero />
      <Companies />
      <Residencies />
      <Values />
      <Contact />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
