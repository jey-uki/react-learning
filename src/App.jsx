import "./App.css";
import Footer from "./componensts/Footer";
import Header from "./componensts/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Home />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
