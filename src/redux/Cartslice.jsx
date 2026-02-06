/*

React - ui library
Redux - state management library
redux - immutable state management - actions(type )
core concepts - action, reducer, store
actions - type, payload(function)
reducer - pure function - (prevState, action) => newState  (action, state) (manage state update logic)
useDispatch - to dispatch action
Store - holds the state of the application (createStore)  configureStore()
react-redux redux @reduxjs/toolkit
createSlice - action creator + reducer logic in a single file
*/

import { createSlice } from "@reduxjs/toolkit";

const storedItem = localStorage.getItem("cartItem")

const initialState = {
    cartItem : storedItem ? JSON.parse(storedItem) : []  //initialstate of cartitem
}

const CartSlice = createSlice({ 
    name:"cart",  //action type
    initialState, 
    reducers:{  // state update logic
        addToCart:(state, action)=>{    //action creator
            const newProduct = action.payload  //payload
            const existngProduct = state.cartItem.find((items)=>items.id === newProduct.id) //check if product already exists in cartitem array
            if(existngProduct){  //if product already exists in cartitem array
                existngProduct.quantity += newProduct.quantity  //update quantity of existing product
            }
            else{
                state.cartItem.push({  //add new product to cartitem array
                    id:newProduct.id,
                    title:newProduct.title,
                    price:newProduct.price,
                    img:newProduct.img,
                    quantity:1
                })
            }
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem)) //update localstorage
        },
        deleteFromCart:(state,action)=>{
            state.cartItem = state.cartItem.filter((items)=>items.id !== action.payload.id)
            localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
        },

        updateQuantity:(state,action)=>{
            const {id, quantity} = action.payload
            const product = state.cartItem.find((items)=>items.id === id)
            if(product){
                product.quantity = quantity
                localStorage.setItem("cartItem", JSON.stringify(state.cartItem))
            }

        }
    }
})

export default CartSlice.reducer //export reducer

export const {addToCart, deleteFromCart, updateQuantity} = CartSlice.actions //export action creator