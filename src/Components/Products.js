
import React, { useState } from 'react';


import Cart from './Cart';
import Shop from './Shop';


import Productlist from './Productlist';


const Products = () => {

    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
    const [warning, setWarning] = useState(false);

    const handleClick = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
            if (item.id === product.id)
                isPresent = true;
        })
        if (isPresent) {
            setWarning(true);
            setTimeout(() => {
                setWarning(false);
            }, 2000);
            return;
        }
        setCart([...cart, item]);
    }

    const handleChange = (item, d) => {
        let ind = -1;
        cart.forEach((data, index) => {
            if (data.id === item.id)
                ind = index;
        });
        const tempArr = cart;
        tempArr[ind].amount += d;

        if (tempArr[ind].amount === 0)
            tempArr[ind].amount = 1;
        setCart([...tempArr])
    }

    return (
        <div className='App'>




            <Shop size={cart.length} setShow={setShow} ></Shop>
            {
                show ? <Productlist handleClick={handleClick} ></Productlist> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} ></Cart>
            }
            {
                warning && <div className='warning'>Item is already added to your cart</div>
            }
        </div>
    )
}

export default Products;