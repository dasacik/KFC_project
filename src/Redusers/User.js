import { createSlice } from "@reduxjs/toolkit";

// opening reduser
let id = 1;
const KFCuser = createSlice({
  name: "KFC",
  initialState: [],
  reducers: {

    addUser: (state, action) => {
      const user = {
        Id : action.payload
      };
      state.push(user)
    }
  },
});

export const { addUser} = KFCuser.actions;
export default KFCuser.reducer;