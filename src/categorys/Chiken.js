
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Card } from "react-bootstrap";
import { addCartId } from "../Redusers/IDcart";
import "../Style/Menu.scss";

function Chiken() {
  // Взятие Продуктов от Редакс  
    let products = useSelector((state) => state.reduxes);
      // Открыл UseState для отправления в redux
    const [idCart, setIdCart] = useState(0);
    // Dispatch для отправления 
    let dispatch = useDispatch();
     // Фуекция для Отправления в Redux
    const goCart = (e) => {
      setIdCart(e.target.value);
      dispatch(addCartId(e.target.value));
    }
  return (
    <>
    <div className="BasketsCon">
       {/* Map для создания карточек продуктов */}
      {products.length > 0 &&
        products[0].menu.map((data) => {
          if (data.category === "Курица") {
            return (
              <Card className="Card" key={data.id}>
                <Card.Img variant="top" src={data.photo} className="Cardimg" />
                <Card.Body className="CardText">
                  <p className="categoryText">{data.category}</p>
                  <p className="menuNameText">{data.menuName}</p>
                  <p className="priceText">{data.price} UZS</p>
                  <button value={data.id} onClick={goCart}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      height="15px"
                      fill="currentColor"
                      className="bi bi-bag"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>{" "}
                    в Карзину
                  </button>
                </Card.Body>
              </Card>
            );
          }
        })}
    </div>
  </>
  )
}

export default Chiken