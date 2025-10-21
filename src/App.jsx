import "./App.css";
import Footer from "./componensts/Footer";
import Header from "./componensts/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Props from "./pages/Props";
import Components from "./pages/Components";
import JSX from "./pages/JSX";
// import ReactIntro from "./pages/ReactIntro";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <div className="m-6">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/react-intro" element={<ReactIntro />} /> */}
          <Route path="/jsx" element={<JSX />} />
          <Route path="/components" element={<Components />} />
          <Route path="/props" element={<Props />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
