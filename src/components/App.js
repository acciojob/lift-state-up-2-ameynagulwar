
import React,{useState}from "react";
import './../styles/App.css';
import Child from "./Child.js"
const App = () => {
  let [parent, setParent] = useState("");
  
  return (
    <div>
         <h3>Parent component</h3>
         <Child changeParent={setParent}/>
         <p>{parent}</p>
    </div>
  )
}

export default App
