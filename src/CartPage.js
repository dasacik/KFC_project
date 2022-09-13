import AmountButton from "./AmountButton";
import "./Style/Cart.scss";
import AboutUser from "./AboutUser";

function CartPage() {
  const [copyMenu, setCopyMenu] = useState(props.menu);

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
                  <AmountButton num={data} />
                </div>
              </div>
              <div className="priceCon">
                <div>
                  <h4>{data.price}</h4>
                </div>
                <div>
                  <button value={index} onClick={handleDelete}>Удалить</button>
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