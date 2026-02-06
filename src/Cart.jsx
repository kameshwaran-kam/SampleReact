import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart, updateQuantity } from './redux/Cartslice'

const Cart = () => {
    const cartProduct = useSelector((state)=>state.cart.cartItem)

    const dispatch = useDispatch()

    const deleteCart = (prod)=>{
        dispatch(deleteFromCart(prod))
    }

    const incrementQuantity = (id, quantity) =>{
        dispatch(updateQuantity({id, quantity : quantity + 1}))
    }

    const decrementQuantity = (id, quantity) =>{
        if(quantity > 1){
            dispatch(updateQuantity({id,quantity: quantity -1 } ))
        }
    }

    const totalPrice = cartProduct.reduce((total, prod)=> total + prod.price * prod.quantity, 0)

    const totalQuantity = cartProduct.reduce((total, prod)=>total + prod.quantity, 0)

  return (
    <div>
        <table className='table'>
            <thead>
                <th>title</th>
                <th>image</th>
                <th>price</th>
                <th>quantity</th>
                <th>action</th>
            </thead>
            <tbody>
                {cartProduct.map((prod)=>(
                    <tr key={prod.id}>
                        <td>{prod.title}</td>
                        <td><img src={prod.img} alt={prod.title} width={100}/></td>
                        <td>{prod.price}</td>
                        <td>
                            <button onClick={()=>incrementQuantity(prod.id, prod.quantity)}>+</button>
                            {prod.quantity}
                            <button onClick={()=>decrementQuantity(prod.id, prod.quantity)}>-</button>
                        </td>
                        <td><button className='btn btn-danger' onClick={()=>deleteCart(prod)}>Delete</button></td>
                    </tr>
                ))}  
            </tbody>
        </table>

        <h1>TotalQuantity :{totalQuantity}</h1>
        <h1>TotalPrice :{totalPrice}</h1>
    </div>
  )
}

export default Cart