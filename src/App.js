import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Annonces from "./pages/Annonces";
import AddNewAd from "./pages/AddNewAd";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/annonces" element={<Annonces />} />
                    <Route path="/ajouter-une-annonce" element={<AddNewAd />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
