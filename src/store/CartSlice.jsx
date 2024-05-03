import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name : "cart",
  initialState : {
    items : [],
  },
  reducers :{
    addItems : (state , action)=>{
         state.items.push(action.payload)
    } ,
    removeItems: (state, action) => {
      const idToRemove = action.payload;
      const indexToRemove = state.items.findIndex(item => item.id === idToRemove);
      if (indexToRemove !== -1) {
          state.items.splice(indexToRemove, 1);
      }
  },
    clearCart : (state) =>{
        state.items = [];
    },
  },
})

export const {addItems , removeItems , clearCart } = cartSlice.actions;

export default cartSlice.reducer;