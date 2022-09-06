import React from "react";
import { useState } from "react";
function AmountButton(props) {
    // State Для количество 
    const [amountNum , setAmountNum] = useState(props.num.amout)
// Функция для добовления продукта 
    const increment = ()=>{
        setAmountNum(amountNum + 1)
    }
    // Функция для убавленрия продукта
    const decrement = ()=>{
        if(amountNum === 0){
            alert('минимальное количество !!!')
        }
        else{
            setAmountNum(amountNum - 1)
        }
    }
    return (
    <>
      <button onClick={increment}>+</button>
      <h4>{amountNum}</h4>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default AmountButton;