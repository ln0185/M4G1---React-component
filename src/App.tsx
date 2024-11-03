// src/App.tsx
import React from "react";
import "./App.css";
import HamburgerMenu from "./HamburgerMenu";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <HamburgerMenu />
      </header>
    </div>
  );
};

export default App;
