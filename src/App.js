import "./App.css";

function App() {
  const [counters, setCounters] = useState([0, 0, 0]);
  return (
    <div className="App">
   <ul>
      {[0,1,2].map(v=>(
        <li>
           <button onClick={()=>setCounters(counters + 1)}> 
           You pressed me {count} times </button>
           </li>
      ))}
      </ul>
    </div>
  );
}

export default App;
