import React,{useState} from 'react'

const App = () => {
  const [counters,setCounters]=useState([0,0,0])

  const counter =()=>{

  }

  return (
    <div>
      <button>You pushing me {counters[item]} times</button>
    </div>
  )
}

export default App
