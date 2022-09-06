import { configureStore } from "@reduxjs/toolkit";
import Reduser from "./Reduser";
import IDcart from "./IDcart";
import User from "./User";
import Amount from "./Amount";
// opening stor
const store = configureStore({
  reducer: {
    reduxes: Reduser,
    cartId : IDcart,
    user : User,
    amount : Amount,
  },
});

export default store;