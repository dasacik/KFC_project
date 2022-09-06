import AmountButton from "./AmountButton";
import { useSelector } from "react-redux";
import "./Style/Cart.scss";
import AboutUser from "./AboutUser";

function CartPage() {
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

  const handledelete = (event)=>{
    const num = event.target.value
    numAscending.splice(num , num + 1)
    console.log(numAscending)
  }
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
        {numAscending.map((data, index) => {
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
                  <AmountButton num={data} />
                </div>
              </div>
              <div className="priceCon">
                <div>
                  <h4>{data.price}</h4>
                </div>
                <div>
                  <button value={index} onClick={handledelete}>Удалить</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* вызываем компомент */}
      <AboutUser product={numAscending} />
    </>
  );
}

export default CartPage;