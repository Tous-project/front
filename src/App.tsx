import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MapPage from "./pages/mapPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
