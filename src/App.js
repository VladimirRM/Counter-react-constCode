import React, { useState } from "react";

const App = () => {
  const [counters, setCounters] = useState([0, 0, 0]);

  const count = (n) => {
    setCounters(
      counters.map((v, i) => {
        if (n === i) {
          return v + 1;
        }
        return v;
      })
    );
  };
  return (
    <div>
      <ul>
        {[0, 1, 2].map((v) => (
          <li key={v}>
            <button onClick={() => count(v)}>
              you pressed me {counters[v]} times
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
