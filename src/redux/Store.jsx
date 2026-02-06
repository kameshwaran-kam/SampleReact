import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './Cartslice.jsx'

const Store = configureStore({
    reducer:{ //combine reducer
        cart:CartSlice, //cart key for cartslice reducer
    },
    devTools:true
})
export default Store