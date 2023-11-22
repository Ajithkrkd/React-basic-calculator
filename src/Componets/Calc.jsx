import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Calc.css"; // Import a separate CSS file for your custom styles
import "../Componets/Calc.css";
function Calc() {
  const [num1 ,setNum1] = useState('')
  const [num2 ,setNum2] = useState('')
  const [operator ,setOperator] = useState('')
  const [result , setResult] = useState('')

const findResult =()=>{
 const number1 = parseInt(num1)
 const number2 = parseInt(num2)
  switch (operator){
    case '+':
      setResult(number1+number2);
      break;
    case '-':
      setResult(number1 - number2);
      break;
    case '/':
      setResult(number1 / number2);
      break;
    case '*':
      setResult(number1 * number2);
      break;
      default:
        break;  
  }
 
  
}
const clearAll=()=>{
  window.location.reload();
}
  console.log(num1 ,'num1')
  console.log(num2 ,'num2')
  console.log(operator ,'operator')
  return (
    <div className="main-div">
      <div className="input-box">
        <input
        onChange={(e)=>setNum1(e.target.value)} 
         className=""
         type="text" 
         placeholder="0" />
        <input 
         onChange={(e)=>setNum2(e.target.value)} 
        className="mt-3" 
        type="text " 
        placeholder="0" />
        <input 
         value={operator}
        className="mt-3" 
        type="text " 
        placeholder="select operator" readOnly />

        <input 
        value={result}
         className="mt-3" 
         type="text "
         placeholder="ans" readOnly />
      </div>
      <div>
        <div className="opertion-buttos">
          <button onClick={()=>{setOperator('+')}}>+</button>
          <button onClick={()=>{setOperator('-')}}>-</button>
          <button onClick={()=>{setOperator('/')}}>/</button>
          <button onClick={()=>{setOperator('*')}}>*</button>
        </div>
        <div className="equal-button">
          <button className="" onClick={findResult}>=</button>
          <button className="" style={{color:'#111',backgroundColor:'#6F313A'}} onClick={clearAll}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default Calc;
