import React from 'react'
import CartPage from './CartPage'
import { useSelector } from "react-redux";
import { useState } from 'react';

function CartProducts() {
    // Взял от redux который был отправлен от Кардов
  const idcarts = useSelector((state) => state.cartId);
  // Взял продуктов от Redux
  const products = useSelector((state) => state.reduxes);
  // Открыл пустые Arrays для For Loop
  const copyMenu = [];
  const newElements = [];
  let slicedProducts = [];
  // Открытие Array.map()
  products.length > 0 &&
    products[0].menu.map((data) => {
      copyMenu.push(data);
      return null;
    });
  // Открыл 3 For Loops для отправление Определеных продуктов Которые были взяти через Id
  for (let i = 0; i < idcarts.length; i++) {
    const element = copyMenu.slice(idcarts[i].Id - 1, idcarts[i].Id);
    slicedProducts.push(element);
  }
  for (let j = 0; j < slicedProducts.length; j++) {
    const element = slicedProducts[j];
    const newArray = [...element].sort((a, b) => a.id - b.id);
    for (let k = 0; k < newArray.length; k++) {
      const element = newArray[k];
      newElements.push(element);
    }
  }
  // сделал сортировку по ID
  const numAscending = [...newElements].sort((a, b) => a.id - b.id);
  // Array для количество и цен продуктов
  const num = []
  const price = []
  // Map для отправления элементов в Array
  numAscending.map((prod)=>{
    num.push(prod.amout)
    price.push(prod.price)
    return null
  })
  return (
    // отправил продуктов б-, цен и количество через пропс
    <div>{<CartPage menu={numAscending} amountNum={num} prodPrice={price}/>}</div>
  )
}

export default CartProducts