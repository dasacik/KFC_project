import { createSlice } from "@reduxjs/toolkit";

// opening reduser
let id = 1;
const KFCmenu = createSlice({
  name: "KFC",
  initialState: [],
  reducers: {
    // add reduser books
    addMenu: (state, action) => {
      const newObj = {
        menu: action.payload
      };
      state.push(newObj);
    },
   
  },
});

export const { addMenu} = KFCmenu.actions;
export default KFCmenu.reducer;
