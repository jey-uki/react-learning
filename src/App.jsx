import "./App.css";
import Footer from "./componensts/Footer";
import Header from "./componensts/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Props from "./pages/Props";
import Components from "./pages/Components";
import JSX from "./pages/JSX";
import NotFound from "./pages/NotFound";
import Hooks from "./pages/Hooks";
import Forms from "./pages/Forms";
import Fetch from "./pages/Fetch";
import ReactInto from "./pages/ReactInto";
import Axios from "./pages/Axios";

function App() {
  return (
    <>
      <Header />
      <div className="m-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<ReactInto />} />
          <Route path="/jsx" element={<JSX />} />
          <Route path="/components" element={<Components />} />
          <Route path="/props" element={<Props />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/fetch" element={<Fetch />} />
          <Route path="/axios" element={<Axios />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
