import React from "react";
import "./App.css";
import { data } from "./assets/data";
import { Card } from "./components/Card";

function App() {
  return (
    <div>
      {data.map((lists, index) => {
        return <Card title={lists.title} list={lists.list} key={index} />;
      })}
    </div>
  );
}

export default App;
