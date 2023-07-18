
import React,{useState}from "react";
import './../styles/App.css';
import Child from "./Child.js"
const App = () => {
  let [parent, setParent] = useState("");
  
  return (
    <div className="parent">
         <h3>Parent component</h3>
         <p>{parent}</p>
         <Child changeParent={setParent}/>
    </div>
  )
}

export default App
