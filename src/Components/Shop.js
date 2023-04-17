
import React from 'react';


const Shop = ({ size, setShow }) => {
    return (
        <div className='flex justify-around py-2 bg-amber-400 h-10 '>


            <div onClick={() => setShow(true)}>
                <span>
                    Shopping
                </span>
            </div>
            <div onClick={() => setShow(false)}>
                <span>
                    Cart
                </span>
                <sup>{size}</sup>
            </div>

        </div>


    )
}
export default Shop

