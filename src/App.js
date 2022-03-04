import React from "react";
import "./App.css";
import { data } from "./assets/data";
import { Card } from "./components/Card";

function App() {
  return (
    <div>
      {data.map((lists, index) => {
        return <Card {...lists} key={index} />;
      })}
    </div>
  );
}

export default App;
