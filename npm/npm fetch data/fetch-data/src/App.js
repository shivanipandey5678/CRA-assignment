import {useState,useEffect} from 'react';


let Fetch=async (URL)=>{
  try {
    let res=await fetch(URL);
    let result=await res.json();
    return result;
  } catch (error) {
    throw new Error(error)
  }
   
}
function App(){
    let [data,setData]=useState([]);
    const [err,setErr]=useState(false);
    const [loading,setLoading]=useState(false);

    const fetchAndUpdateData=async ()=>{
      setLoading(true);

      try {
        let data1=await Fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        setData(data1)
        setLoading(false)
      } catch (error) {
        setErr(true);
        setLoading(false)
      }
     
    }
    useEffect(()=>{fetchAndUpdateData()},[])
    if(err){
      return <h1>Something went wrong.. please</h1>;
    }
    if (loading) {
      return <h1>Loading...</h1>;
    }
    
  
    return(
      <div>
        <h1>Get posts as soon as the component renders</h1>
        {
          data.map(function(e){
            return <div key={e.id}>{e}</div>
          })
        }
      </div>
    )
    

}
export default App;