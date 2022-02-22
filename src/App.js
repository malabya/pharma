import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    document.title = "Dhruba Medical"
  }, [])

  return (
    <div className="app">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
