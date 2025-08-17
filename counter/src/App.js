import React,{useState,useEffect} from "react";
import "./App.css";


const App = () => {
  let [v1, v1Count] = useState(0);
  let [v2, v2Count] = useState(0);
  let [mul, mulCount] = useState("");
  let [div, divCount] = useState("");
  

  return(
    <>
    <div class="card">
    <div class="count">
    <div class="value1">
      <button onClick={()=>{
        v1Count(v1-1)
      }}>-</button>

      <div class="input">{v1}</div>

      <button onClick={()=>{
        v1Count(v1+1)
      }}>+</button>

      
    </div>
    
    <div class="value2">
      <button onClick={()=>{
        v2Count(v2-1)
      }}>-</button>

      <div class="input">{v2}</div>

      <button onClick={()=>{
        v2Count(v2+1)
      }}>+</button>
      
    </div>
    </div>
    
    <div class="total">total: {mul} {div}</div>

    <div class="cal"> 
    <div>
      <button class="multiply" onClick={()=>{
        mulCount(v1*v2)
      }} >muliply</button>
    </div>

    <div>
      <button class="divide"onClick={()=>{
        divCount(v1/v2)
      }}>divide</button>
    </div>
    </div>
    <div class="reset">
      <button onClick={()=>{
        v1Count(v1=0)
        v2Count(v2=0)
        mulCount(mul="")
        divCount(div="")
      }} class="reset">reset</button>
    </div>

    </div>
    </>
  )

}


  
export default App;