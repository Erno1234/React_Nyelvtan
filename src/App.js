import "./App.css";
import Layout from "./Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Gepel from "./pages/Gepel";
import Rendez from "./pages/Rendez";
import Valaszto from "./pages/Valaszto";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Gepel />} />
            <Route path="gepel" element={<Gepel />} />
            <Route path="rendez" element={<Rendez />} />
            <Route path="valaszto" element={<Valaszto />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
