import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MobileCardsPage from "./components/MobileCardsPage";
import PhonePage from "./components/PhonePage"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MobileCardsPage />} />
        <Route path="/phone/:model" element={<PhonePage />} />
      </Routes>
    </Router>
  );
}

export default App;
