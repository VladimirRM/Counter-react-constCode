import React,{useState} from 'react'

const App = () => {

 const  [counters,setCounters]=useState([0,0,0])

 const counter =(number)=>{
     setCounters(counters.map((item,index)=>{
      if(number===index){
        return item + 1
      }
      return item
     }))
 }
  return (
    <div>
         <ul>
          {[0,1,2,].map(item=>(
            <li>
      <button onClick={()=>counter(item)}>You pushing me {counters[item]} times</button>

            </li>
          ))}
      </ul>
      
    </div>
  )
}

export default App