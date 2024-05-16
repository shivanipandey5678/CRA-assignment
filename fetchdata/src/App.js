import React, { useEffect } from 'react';
import axios from 'axios';

import './App.css';
   



function App() {
  const [fetcheddata,setFetchedData]=React.useState([]);
  let [originalTitle,setOriginalTitle]=React.useState(["bye"]);
  const [title,SetTitle]=React.useState("Default title");
  useEffect(()=>{
    document.title=title;
    Fetch()
    MouseMovment()
    return ()=>{
      document.title=originalTitle;
      document.removeEventListener("mousemove",MouseMovment)
    }
  },[title])

  function MouseMovment(){
    document.addEventListener("mousemove",function(e){
      let x=e.clientX;
      let y=e.clientY;
      console.log("ClientX :"+x);
      console.log("ClientY :"+y);
    })
  }
  function Fetch(){
  
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response)=>{
      setFetchedData(response.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  
  return (
    <div className="App">
     {fetcheddata.map((e)=>{
      return (
        <div key={e.id} id='seprateDiv'>
            <h2>{`title : ${e.title}`}</h2>
            <h3>{`userId : ${e.userId}`}</h3>
            <p>{e.body}</p>

        </div>
      )
    })}
    </div>
  );
}

export default App;
