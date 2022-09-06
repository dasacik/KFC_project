import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import store from "./Redusers/store";
import Layout from "./Layout";
import CartPage from "./CartPage";
import AmountButton from "./AmountButton";
function Index() {
  return (
    <>
    {/* Раутеры */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />}></Route>
            <Route path="CartPage" element={<CartPage />}></Route>
            <Route path="Amount" element={<AmountButton />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Index />
  </Provider>
);
