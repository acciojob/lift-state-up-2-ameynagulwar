
import React,{useState}from "react";
import './../styles/App.css';

const App = () => {
  let [parent, setParent] = useState("");
  let [child, setChild] = useState("")
  return (
    <div>
         <div id='parent'style={{width: "100%", height:"100%", background:"green",color:"black"}}  onChange={() => setParent(child)}>
        <h1>Parent component</h1>
        <p>{parent}</p>
         <div id='child' style={{width:"50%",height:"500px",backgroundColor:"brown", color:"black"}}>
         <h3>Child component</h3>
           <input type='text'style={{width:"200px",height:"100px", backgroundColor:"white", color:"black"}} onChange={(event) => setChild(event.target.value)}/>
         </div>
    </div>
    </div>
  )
}

export default App
