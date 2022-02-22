import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";

function App() {
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
