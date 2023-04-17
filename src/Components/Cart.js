import React, { useEffect, useState } from 'react';



const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);

    }

    useEffect(() => {
        handlePrice();
    })

    return (
        <div className='flex justify-center mt-20'>
            <article>
                {
                    cart?.map((item) => (
                        <div key={item.id}>
                            <div className="w-64">
                                <img src={item.img} alt='img' />
                                <p>{item.title}</p>
                            </div>
                            <div>
                                <button onClick={() => handleChange(item, +1)}> + </button>
                                <button>{item.amount}</button>
                                <button onClick={() => handleChange(item, -1)}> - </button>
                            </div>
                            <div>
                                <span>{item.price}</span>
                                <button onClick={() => handleRemove(item.id)} >Remove</button>
                            </div>
                        </div>
                    ))}
                <div>
                    <span>Total Price of your Cart</span>
                    <span>$ - {price}</span>
                </div>
            </article>
        </div>
    )
}

export default Cart;
