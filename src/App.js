import { render } from "@testing-library/react";
import React, { useState } from "react";

const App = () => {
  const [counters, setCounters] = useState([0, 0, 0]);
  const counter = (number) => {
    setCounters(
      counters.map(item, (index) => {
        if (number === index) {
        return item + 1
        } 
        return item
      })
    );
  };
  return <div></div>;
};

export default App;
