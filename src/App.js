import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import { Intro } from "./Components/Navbar/Intro/Intro";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
