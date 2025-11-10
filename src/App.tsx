import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projetos from "./pages/Projects";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
