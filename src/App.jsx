import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/1-nav.jsx";
import Home from "./components/2-home.jsx";
import StatsBar from "./components/3-statsBar.jsx";
import Services from "./components/4-services.jsx";
import About from "./components/5-about.jsx";
import Contact from "./components/7-contact.jsx";
import Admin from "./components/9-admin";
import Add from "./components/11-add";
import Paitents from "./components/10-paients";
import Statistics from "./components/12-statistics";

function Portfolio() {
  return (
    <>
      <Nav />
      <Home />
      <StatsBar />
      <Services />
      <About />
      <Contact />
    </>
  );
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/login" />
      <Route path="/admin" element={<Admin />} />
      <Route index path="/admin/patients" element={<Paitents />} />
      <Route path="/admin/add" element={<Add />} />
      <Route path="/admin/statistics" element={<Statistics />} />
    </Routes>
  );
}
