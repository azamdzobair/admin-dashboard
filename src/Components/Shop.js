
import React from 'react';


const Shop = ({ size, setShow }) => {
    return (

        <nav>


            <div className="nav_box">

                <span className="my_shop" onClick={() => setShow(true)}>
                    Shopping
                </span>
                <div className="cart" onClick={() => setShow(false)}>
                    <span>
                        Cart
                    </span>
                    <sup>{size}</sup>
                </div>
            </div>

        </nav>
    )
}
export default Shop

