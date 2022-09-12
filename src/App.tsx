import { Routes, Route, BrowserRouter } from "react-router-dom";
import Map from "./pages/Map";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
