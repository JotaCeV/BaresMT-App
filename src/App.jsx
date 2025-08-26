import { Route, Routes } from "react-router-dom";
import TientePage from "./TientePage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TientePage />} />
      </Routes>
    </div>
  );
}

export default App;
