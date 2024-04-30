import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name : "cart",
  initialState : {
    items : [ ],
  },
  reducers :{
    addItems : (state , action)=>{
         state.items.push(action.payload)
    } ,
    removeItems : (state , action) =>{
        const idToRemove = action.payload;
        state.items = state.items.filter(item => item.id !== idToRemove);
    },
    clearCart : (state) =>{
        state.items = [];
    },
  },
})

export const {addItems , removeItems , clearCart } = cartSlice.actions;

export default cartSlice.reducer;