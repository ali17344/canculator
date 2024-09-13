import React from 'react';

const Button = ({num1,num2,setNum1,setNum2,setResult}) => {
    return (
        <div>
             <h1>Calculator</h1>
      <div>
        <input type="number" onChange={(e) => setNum1(+e.target.value)}/>
        <input type="number" onChange={(e) => setNum2(+e.target.value)}/>
        <button onClick={() => {setResult(num1 + num2)}}>+</button>
        <button onClick={() => {setResult(num1 - num2)}}>-</button>
        <button onClick={() => {setResult(num1 * num2)}}>*</button>
        <button onClick={() => {setResult(num1 ** num2)}}>**</button>
        <button onClick={() => {setResult(num1 / num2)}}>/</button>
      </div>
        </div>
    );
}

export default Button;
