import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightList from "./pages/FlightList";
import FlightDetail from "./pages/FlightDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlightList />} />
        <Route path="/flight/:id" element={<FlightDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
