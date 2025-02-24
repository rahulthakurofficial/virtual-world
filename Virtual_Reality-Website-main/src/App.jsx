import "./App.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/Project/Project";
import Services from "./components/Services/Services";

const App = () => {
  return <div>
    <section id="Homepage"><Navbar/><Hero/></section>
    <section id="Services"><Services/></section>
    <div id="Projects"><Project/>  </div>
    <section id="Contact"><Contact/></section>
  </div>;
};

export default App;
