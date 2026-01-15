import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Pages
import HomePage from "./pages/HomePage";
import ExecutivesPage from "./pages/ExecutivesPage";
import PastExecutives from "./pages/PastExecutives"; // Removed the duplicate
import EventsPage from "./pages/EventsPage";
import Newspage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";

// News Sub-pages
import PatronPage from "./pages/PatronPage";
import RedeemersVisitPage from "./pages/RedeemersVisitPage";
import UnimedVisitPage from "./pages/UnimedVisitPage";
import LagosVisitPage from "./pages/LagosVisitPage";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/executives" element={<ExecutivesPage />} />
        <Route path="/past-executives" element={<PastExecutives />} />  
        <Route path="/events" element={<EventsPage />} /> 
        <Route path="/news" element={<Newspage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* News Sub-routes */}
        <Route path="/news/patron" element={<PatronPage />} />
        <Route path="/news/redeemers-visit" element={<RedeemersVisitPage />} />
        <Route path="/news/unimed-visit" element={<UnimedVisitPage />} />
        <Route path="/news/lagos-visit" element={<LagosVisitPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}