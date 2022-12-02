import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import { CarDetails } from "./components/CarDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <CarDetails />
    </div>
  );
}

export default App;
