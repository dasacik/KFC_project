import React, { useRef} from "react";
import ApiMenu from "./ApiMenu";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Style.scss";
import Baskets from "./categorys/Baskets";
import About from "./About";
import Burgers from "./categorys/Burgers";
import Twisters from "./categorys/Twisters";
import Chiken from "./categorys/Chiken";
import Fries from "./categorys/Fries";
import Sous from "./categorys/Sous";
import Drink from "./categorys/Drink";
import Cake from "./categorys/Cake";
import {useNavigate} from "react-router-dom"

function App() {
  // Добавил навиатор
  const navigateTo = useNavigate()
  // Эти элементы для Scroll Button
  const baskets = useRef(null);
  const burgers = useRef(null);
  const twisters = useRef(null);
  const chiken = useRef(null);
  const fries = useRef(null);
  const sous = useRef(null);
  const drink = useRef(null);
  const cake = useRef(null);
  const home = useRef(null);
  const executeScroll = () => baskets.current.scrollIntoView();
  const homeScroll = () => home.current.scrollIntoView();
  const BurgerScroll = () => burgers.current.scrollIntoView();
  const TwisterScroll = () => twisters.current.scrollIntoView();
  const FriesScroll = () => fries.current.scrollIntoView();
  const ChikenScroll = () => chiken.current.scrollIntoView();
  const SousScroll = () => sous.current.scrollIntoView();
  const DrinkScroll = () => drink.current.scrollIntoView();
  const CakeScroll = () => cake.current.scrollIntoView();
 
  return (
    <>
      {/* Этот ApiMenu добавлен что-бы вызвать нашу самодельную API */}
      {<ApiMenu />}
      <div>
        {/* header Был Взян из Bootstrap */}
        <Navbar expand="lg" className="navCon">
          <Container>
            <Navbar.Brand onClick={homeScroll}>
              <img
                src="KFC_logo.png"
                width="60"
                height="60"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{ marginLeft: "10vw" }}>
                <Nav.Link className="NavbarText" onClick={executeScroll}>
                  Баскеты
                </Nav.Link>
                <Nav.Link className="NavbarText" onClick={BurgerScroll}>
                  Бургеры
                </Nav.Link>
                <Nav.Link className="NavbarText" onClick={TwisterScroll}>
                  Твистеры
                </Nav.Link>
                <Nav.Link className="NavbarText" onClick={ChikenScroll}>
                  Курица
                </Nav.Link>
                <Nav.Link className="NavbarText" onClick={FriesScroll}>
                  Картофель фри
                </Nav.Link>
                <Nav.Link className="NavbarText" onClick={SousScroll}>
                  Соусы
                </Nav.Link>
                <Nav.Link className="NavbarText" onClick={DrinkScroll}>
                  Напитки
                </Nav.Link>
                <Nav.Link className="NavbarText" onClick={CakeScroll}>
                  Десерты
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* About us container open */}
        <span ref={home}>
          <About />
        </span>
        {/* Вызиваю продуктов */}
        <div ref={baskets} className="productsName">
          <div className="CategorysCon">
            <h3>Баскеты</h3>
          </div>
          <Baskets />
        </div>
        <div ref={burgers} className="productsName">
          <div className="CategorysCon" style={{ margin: "3vh 0" }}>
            <h3>Бургеры</h3>
          </div>
          <Burgers />
        </div>
        <div ref={twisters} className="productsName">
          <div className="CategorysCon" style={{ margin: "3vh 0" }}>
            <h3>Твистеры</h3>
          </div>
          <Twisters />
        </div>
        <div ref={chiken} className="productsName">
          <div className="CategorysCon" style={{ margin: "3vh 0" }}>
            <h3>Курица</h3>
          </div>
          <Chiken />
        </div>
        <div ref={fries} className="productsName">
          <div className="CategorysCon" style={{ margin: "3vh 0" }}>
            <h3>Картофель фри</h3>
          </div>
          <Fries />
        </div>
        <div ref={sous} className="productsName">
          <div className="CategorysCon" style={{ margin: "3vh 0" }}>
            <h3>Соусы</h3>
          </div>
          <Sous />
        </div>
        <div ref={drink} className="productsName">
          <div className="CategorysCon" style={{ margin: "3vh 0" }}>
            <h3>Напитки</h3>
          </div>
          <Drink />
        </div>
        <div ref={cake} className="productsName">
          <div className="CategorysCon" style={{ margin: "3vh 0" }}>
            <h3>Десерты</h3>
          </div>
          <Cake />
        </div>
      </div>
      {/* Эьл Кнопка для страницы корзина */}
      <div className="CartButton" onClick={()=>{navigateTo('CartProducts')}} >
        
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-basket3"
          viewBox="0 0 16 16"
        >
          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z" />
        </svg>
      </div>
    </>
  );
}

export default App;