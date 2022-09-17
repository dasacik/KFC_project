import React, { useState } from "react";
import "./Style/AboutUser.scss";
import { useDispatch } from "react-redux";
import { addUser } from "./Redusers/User";

function AboutUser(props) {
  // открыл useState для Form Inputs
  const [user, setUser] = useState({});
  // State Для открытие и закритие Контейнера
  const [divTrueFalse, setDivTrueFalse] = useState(false);
  // Dispatch для отправления
  const dispatch = useDispatch();
  // Меод для общей суммы
  const allPrice = [0];
  for (let i = 0; i < props.price.length; i++) {
    let a = allPrice.pop();
    allPrice.push(props.price[i] + a);
  }

  // Сделал плюс сумму продуктов с ценой доставки
  const finalyPrice = allPrice[0] + 15000;

  //  Submit для открытие контейнера даных клиента
  const handleSubmint = (event) => {
    if (finalyPrice > 15001) {
      event.preventDefault();
      setDivTrueFalse(true);
    } else {
      alert("Добавьте в корзину продукт");
    }
  };

  // onChange для отпраления в statr
  const handleChange = (event) => {
    const user = event.target.name;
    const elements = event.target.value;
    setUser((oldingiHolat) => ({
      ...oldingiHolat,
      [user]: elements,
    }));
  };

  // Функция для закрития контейнера
  const handleClose = () => {
    setDivTrueFalse(false);
  };
  // Функция для саказа и отправления данных клиента
  const handleOrder = () => {
    dispatch(addUser(user), setUser(""));
    setDivTrueFalse(false);
  };

  return (
    <>
      <div className="FormCon">
        {/* контейнер для тектса */}
        <div className="title">
          <h2>Адрес:</h2>
        </div>
        {/* Контейнер для форма */}
        <div className="FotherFormCon">
          {/* открыл форм */}
          <form onSubmit={handleSubmint}>
            {/* открыл див для input */}
            <div className="formCon">
              <label>
                Имя <span>*</span>
              </label>
              <input
                type="text"
                name="name"
                value={user.name || ""}
                onChange={handleChange}
              />
            </div>
            {/* открыл див для input */}
            <div className="formCon">
              <label>
                Телефон <span>*</span>
              </label>
              <input
                type="number"
                name="phoneNumber"
                value={user.phoneNumber || ""}
                onChange={handleChange}
              />
            </div>
            {/* открыл див для input */}
            <div className="formCon">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email || ""}
                onChange={handleChange}
              />
            </div>
            {/* открыл див для input */}
            <div className="formCon">
              <label>Район</label>
              <input
                type="text"
                name="distric"
                value={user.distric || ""}
                onChange={handleChange}
              />
            </div>
            {/* открыл див для input */}
            <div className="formCon">
              <label>
                Адрес <span>*</span>
              </label>
              <input
                type="text"
                name="address"
                value={user.address || ""}
                onChange={handleChange}
              />
            </div>
            {/* открыл див для input */}
            <div className="formCon">
              <label>Номер кв/дома</label>
              <input
                type="number"
                name="homeNumber"
                value={user.homeNumber || ""}
                onChange={handleChange}
              />
            </div>
            {/* открыл див для input */}
            <div className="formCon">
              <label>Подъезд</label>
              <input
                type="text"
                name="porch"
                value={user.porch || ""}
                onChange={handleChange}
              />
            </div>
            {/* открыл див для input */}
            <div className="formCon">
              <label>Этаж</label>
              <input
                type="number"
                name="floor"
                value={user.floor || ""}
                onChange={handleChange}
              />
            </div>
            {/* Button Для открытие финального контейнера */}
            <button type="submit">Сделать заказ - {finalyPrice},00 UZS</button>
            <p>Доставка 15,000,00 UZS</p>
          </form>
        </div>
      </div>
      {/* Начало Финального контейнера */}
      <div
        style={{ display: `${divTrueFalse ? "block" : "none"}` }}
        className="finelyCon"
      >
        <div className="centralCon">
          {/* Div Для крестика для закритие */}
          <div className="CrosButton">
            {/* кнопка закритие */}
            <button onClick={handleClose}>
              {/* иконка Х */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
              </svg>
            </button>
          </div>
          {/* Div Для текстов */}
          <div className="basicCon">
            <div>
              <h2>Ваш заказ приняли!</h2>
            </div>
            <div>
              <h3>Окончательая цена вашего заказа с доставкой</h3>
            </div>
            <div>
              <h1>{finalyPrice},00 UZS</h1>
            </div>
            <div>
              <p>Ждите звонок от нашего оператора </p>
            </div>
            {/* Button Для Закритие */}
            <div>
              <p>Оператор будет дать вам информацию об курера</p>
            </div>
            <div>
              <button onClick={handleOrder}>Понятно</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUser;
