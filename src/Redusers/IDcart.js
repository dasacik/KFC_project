import { createSlice } from "@reduxjs/toolkit";

// opening reduser
let id = 1;
const KFCid = createSlice({
  name: "KFC",
  initialState: [],
  reducers: {

    addCartId: (state, action) => {
      const cartId = {
        Id : action.payload
      };
      state.push(cartId)
    }
  },
});

export const { addCartId} = KFCid.actions;
export default KFCid.reducer;