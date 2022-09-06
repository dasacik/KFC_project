import { createSlice } from "@reduxjs/toolkit";

// opening reduser
let id = 1;
const KFCamount = createSlice({
  name: "KFCamount",
  initialState: [],
  reducers: {

    addAmount: (state, action) => {
      const amount = {
        amount : action.payload
      };
      state.push(amount)
    }
  },
});

export const { addAmount} = KFCamount.actions;
export default KFCamount.reducer;