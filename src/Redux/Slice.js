import {createSlice} from '@reduxjs/toolkit';
const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addCartItem: (state, action) => {
    //   // console.log(action,"jjj");
    //   state.push(action.payload);
    //   //   console.log(state, 'state');
    // },
    // removeCartItem: (state, action) => {
    //   // console.log();
    //   return state.filter((item, index) => item.name != action.payload.name);
    // },
    drawerstate:(state,action)=>{
        
       return state=action.payload

    },
  },
});
export const {drawerstate} = cartSlice.actions;
export default cartSlice.reducer;
