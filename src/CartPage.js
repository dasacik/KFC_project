import "./Style/Cart.scss";
import AboutUser from "./AboutUser";
import { useState } from "react";
-function CartPage(props) {
  // State для продуктов карзины
  const [copyMenu, setCopyMenu] = useState(props.menu);
  // State каличество продуктов
  const [amount, setAmount] = useState(props.amountNum);
  // State для цену для одного количество
  const [productsPrice, setProductsPrice] = useState(props.prodPrice);
  // State для увелеченной цены продуктов
  const [allPrice, setAllPrice] = useState(props.prodPrice);
  // Метод для увеличения количество продуктов
  const increment = (e) => {
    const copyAmount = [...amount];
    const a = e.target.value;
    copyAmount.splice(a, a > 0 ? a : a + 1, copyAmount[a] + 1);

    const copyPrice = [...productsPrice];
    const copyAllPrice = [...allPrice];
    copyAllPrice.splice(a, a > 0 ? a : a + 1, copyPrice[a] * copyAmount[a]);
    setAllPrice(copyAllPrice);
    setAmount(copyAmount);
  };

  // Метод для убавление количество продуктов
  const decrement = (e) => {
    const copyAmount = [...amount];
    const a = e.target.value;
    if (copyAmount[a] === 1) {
      const copyArr = [...copyMenu];
      copyArr.splice(a, a > 0 ? a : a + 1);
      setCopyMenu(copyArr);
      alert("Минимальное Количество Это : 1");
    } else {
      copyAmount.splice(a, a > 0 ? a : a + 1, copyAmount[a] - 1);
      console.log(copyAmount);

      const copyPrice = [...productsPrice];
      const copyAllPrice = [...allPrice];
      copyAllPrice.splice(a, a > 0 ? a : a + 1, copyPrice[a] * copyAmount[a]);
      setAllPrice(copyAllPrice);

      setAmount(copyAmount);
    }
  };
// Метод удаления продуктов
  const handleDelete = (event) => {
    const copyArr = [...copyMenu];
    const prodIndex = event.target.value;
    copyArr.splice(prodIndex, prodIndex > 0 ? prodIndex : prodIndex + 1);
    setCopyMenu(copyArr);
  };

  return (
    <>
      {/* Маленкий хедер для корзины */}
      <div className="miniNovbar">
        <div>
          <img
            src="KFC_logo.png"
            className="d-inline-block align-top"
            alt="Logo"
          />
          <h1>KFC.uz</h1>
        </div>
      </div>
      <div className="cartCon">
        <div className="title">
          <h5>CART</h5>
        </div>
        {/* сделел Мар для выбранных продуктов  */}
        {copyMenu.map((data, index) => {
          return (
            <div key={data.id} className="cart">
              <div className="cartImg">
                <img src={data.photo} alt={data.manuName} />
              </div>
              <div className="portion">
                <div>
                  <h3>{data.menuName}</h3>
                </div>
                <div>
                  <button value={index} onClick={increment}>
                    +
                  </button>
                  <h4>{amount[index]}</h4>
                  <button value={index} onClick={decrement}>
                    -
                  </button>
                </div>
              </div>
              <div className="priceCon">
                <div>
                  <h4>{data.price * amount[index]}</h4>
                </div>
                <div>
                  <button value={index} onClick={handleDelete}>
                    Удалить
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* вызываем компомент  */}

      <AboutUser product={copyMenu} price={allPrice} menu={copyMenu} />
    </>
  );
};

export default CartPage;
