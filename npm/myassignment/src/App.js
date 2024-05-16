import React,{useState} from 'react';

function App() {
  let [count,setCount]=useState(0);
  function IncCount(){
    setCount(count+1)
  }
  return (
    <div>
     <p>count is {count}</p>
     <button onClick={IncCount}>Inc count</button>
    </div>
  );
}

export default App;
