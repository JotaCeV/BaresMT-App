import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/Landing-Page/LandingPage";
import TientePage from "./pages/Tiente/TientePage";
import MilSeisPage from "./pages/MilSeis/MilSeisPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Tiente" element={<TientePage />} />
        <Route path="/Milseis82" element={<MilSeisPage />} />
      </Routes>
    </div>
  );
}

export default App;
