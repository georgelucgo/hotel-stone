import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Detalhe from "./pages/detalhe/Detalhe";
import { Routes, Route } from "react-router";
import "./App.css";
import PwaStatus from "./components/pwaStatus/PwaStatus";

function App() {
  return (
    <>
      <PwaStatus />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quartos/:id" element={<Detalhe />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
