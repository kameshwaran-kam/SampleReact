import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/Cartslice'

const List = () => {
    const data = [{
        id:1,
        title:"List Data",
        description:"This is list description",
        price:100,
        img:"https://m.media-amazon.com/images/I/31+KsJDSccL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id:2,
        title:"List Data 2",
        description:"This is list description 2",
        price:200,
        img:"https://m.media-amazon.com/images/I/31+KsJDSccL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id:3,
            title:"List Data 3",
            description:"This is list description 3",
            price:300,
            img:"https://m.media-amazon.com/images/I/31+KsJDSccL._SY300_SX300_QL70_FMwebp_.jpg"
    },
    {
        id:4,
            title:"List Data 4",
            description:"This is list description 4",
            price:400,
            img:"https://m.media-amazon.com/images/I/51RaySTbIVL._SX679_.jpg"
    },
    {
        id:5,
            title:"List Data 5",
            description:"This is list description 5",
            price:500,
            img:"https://m.media-amazon.com/images/I/51RaySTbIVL._SX679_.jpg"   
}]

    const cartProduct = useSelector((state)=>state.cart.cartItem)

    const dispatch = useDispatch()

    const addCart = (prod)=>{
        dispatch(addToCart(prod))
    }
  return (
    <>
    <div>
        {data.map((product)=>(
            <div key={product.id}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                <img src={product.img} alt={product.title} />
                 </div>
        ))}
    </div>

    <section>
        <div className="container">
            <div className="row">
                {data.map((prod)=>(
                    <div className='col-lg-4' key={prod.id}>
                        <img src={prod.img} alt={prod.title} className='img-fluid'/>
                        <h3>{prod.title}</h3>
                        <p>{prod.description}</p>
                        <p>{prod.price}</p>
                        {cartProduct.find((items)=>items.id===prod.id) ?
                        <button disabled>Added to cart</button>:
                        <button onClick={()=>addCart(prod)}>add to cart</button>}
                    </div>
                ))}
            </div>fx
        </div>
    </section>
    </>
  )
}

export default List